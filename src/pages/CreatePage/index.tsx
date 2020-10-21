import React, { ChangeEvent, FormEvent, useState } from "react";

// Native
import { Map, Marker, TileLayer } from 'react-leaflet';
import { useHistory } from 'react-router-dom'
import { FiPlus } from "react-icons/fi";

// Components
import SideBar from 'components/SideBar'
import TextInput from 'components/TextInput'
import TextArea from 'components/TextArea'

// Hooks
import { useForm } from 'hooks'

// Services
import api from "services/api";

// Utils
import mapIcon from 'utils/mapIcon'
import mapURL from 'utils/mapURL'

// Private
import './styles.css';

interface PreviewImage {
  name: string;
  url: string;
}

const CreatePage: React.FC = () => {
  const FormValues = {
    name: '',
    about: '',
    instructions: '',
    opening_hours: '',
    latitude: 0,
    longitude: 0,
    open_on_weekends: false,
  }

  const history = useHistory()

  const [formData, setFormData] = useState(FormValues);

  const { 
    handleOption,
    handleMapClick,
    handleInputChange, 
    handleTextAreaChange 
  } = useForm(setFormData)

  const [image, setImage] = useState<File[]>([])
  const [preview, setPreview] = useState<PreviewImage[]>([])


  function handleSelectImage(event: ChangeEvent<HTMLInputElement>) {
    if (!event.target.files) {
      return;
    }
    const selectedImages = Array.from(event.target.files);

    event.target.value = "";

    setImage(selectedImages);

    const selectedImagesPreview = selectedImages.map(image => {
      return { name: image.name, url: URL.createObjectURL(image) };
    });

    setPreview([ ...preview, ...selectedImagesPreview ]);
  }
  
  async function handleSubmit(event: FormEvent) {
    event.preventDefault()

    const { 
      name, 
      about, 
      instructions, 
      opening_hours, 
      latitude, 
      longitude,
      open_on_weekends
    } = formData

    const data = new FormData()

    data.append('name', name)
    data.append('about', about)
    data.append('instructions', instructions)
    data.append('latitude', String(latitude))
    data.append('longitude', String(longitude))
    data.append('opening_hours', opening_hours)
    data.append('open_on_weekends', String(open_on_weekends))
    image.forEach(res => {
      data.append('images', res)
    })

    await api.post('orphanages', data)

    alert('Cadastro realizado com sucesso')
    
    history.push('/map')
  }
  
  return (
    <div id="page-create-orphanage">
      <SideBar />
 
      <main>
        <form onSubmit={handleSubmit} className="create-orphanage-form">
          <fieldset>
            <legend>Dados</legend>

            <Map 
              center={[-27.2092052,-49.6401092]} 
              style={{ width: '100%', height: 280 }}
              zoom={15}
              onclick={handleMapClick}
            >
                <TileLayer url={mapURL} />

                {formData.latitude !== 0 
                  && <Marker  
                      icon={mapIcon} 
                      interactive={false}
                      position={[
                        formData.latitude, 
                        formData.longitude
                      ]} 
                    />
                }

                {/* <Marker  
                  icon={mapIcon} 
                  interactive={false}
                  position={[-27.2092052,-49.6401092]} 
                /> */}
            </Map>

            <TextInput label="Nome" name="name" onChance={handleInputChange}/>

            <TextArea 
              name="about" 
              label="Sobre"
              maxLength={300} 
              onChance={handleTextAreaChange}
            />

            <div className="input-block">
              <label htmlFor="images">Fotos</label>

              <div className="image-container">
                {preview.map(res => {
                  return (
                    <img key={res.name} src={res.url} alt={res.name} />
                  )
                })}
                
                <label htmlFor="image[]" className="new-image">
                  <FiPlus size={24} color="#15b6d6" />
                </label>
              </div>

              <input multiple onChange={handleSelectImage} type="file" id="image[]" />
            </div>
          </fieldset>



          <fieldset>
            <legend>Visitação</legend>

            <TextArea 
              label="Instruções"
              name="instructions" 
              onChance={handleTextAreaChange}
            />

            <TextInput 
              name="opening_hours" 
              onChance={handleInputChange}
              label="Horátio de funcionamento" 
            />

            <div className="input-block">
              <label htmlFor="open_on_weekends">Atende fim de semana</label>

              <div className="button-select">
                <button 
                  name='true'
                  type="button" 
                  onClick={handleOption}
                  className={formData.open_on_weekends && "active"}
                >
                  Sim
                </button>
                <button 
                  name='false'
                  type="button"
                  onClick={handleOption}
                  className={!formData.open_on_weekends && "active"}
                >
                  Não
                </button>
              </div>
            </div>
          </fieldset>

          <button className="confirm-button" type="submit">
            Confirmar
          </button>
        </form>
      </main>
    </div>
  );
}

export default CreatePage