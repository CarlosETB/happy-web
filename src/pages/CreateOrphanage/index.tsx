import React, { ChangeEvent, FormEvent, useState } from "react";

// Native
import { Map, Marker, TileLayer } from 'react-leaflet';
import { FiPlus } from "react-icons/fi";
import { LeafletMouseEvent } from 'leaflet'

// Components
import SideBar from 'components/SideBar'

// Utils
import mapIcon from 'utils/mapIcon'

// Private
import './styles.css';

interface PreviewImage {
  name: string;
  url: string;
}

const CreateOrphanage: React.FC = () => {
  const [position, setPosition] = useState({
    latitude: 0,
    longitude: 0
  })

  const [formData, setFormData] = useState({
    name: '',
    about: '',
    instructions: '',
    opening_hours: '',
  });

  const [open_on_weekends, setOpenOnWeekends] = useState(false)

  const [image, setImage] = useState<File[]>([])
  const [preview, setPreview] = useState<PreviewImage[]>([])

  const handleMapClick = (event: LeafletMouseEvent) => {
    const { lat, lng } = event.latlng

    setPosition({
      latitude: lat,
      longitude:lng
    })
  }

  function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;

    setFormData({ ...formData, [name]: value });
  }

  function handleTextAreaChange(event: ChangeEvent<HTMLTextAreaElement>) {
    const { name, value } = event.target;

    setFormData({ ...formData, [name]: value });
  }

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
  
  function handleSubmit(event: FormEvent) {
    event.preventDefault()

    const { latitude, longitude } = position
    const { name, about, instructions, opening_hours } = formData

    console.log(
      name,
      about,
      instructions,
      opening_hours,
      latitude, 
      longitude,
      open_on_weekends,
      image,
      preview
    )
    
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
                <TileLayer 
                  url='https://a.tile.openstreetmap.org/{z}/{x}/{y}.png' 
                />

                {position.latitude !== 0 
                  && <Marker  
                      icon={mapIcon} 
                      interactive={false}
                      position={[
                        position.latitude, 
                        position.longitude
                      ]} 
                    />
                }

                {/* <Marker  
                  icon={mapIcon} 
                  interactive={false}
                  position={[-27.2092052,-49.6401092]} 
                /> */}
            </Map>

            <div className="input-block">
              <label htmlFor="name">Nome</label>
              <input id="name" name="name" onChange={handleInputChange} />
            </div>

            <div className="input-block">
              <label htmlFor="about">Sobre <span>Máximo de 300 caracteres</span></label>
              <textarea 
                id="about" 
                name="about" 
                maxLength={300} 
                onChange={handleTextAreaChange}
              />
            </div>

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

            <div className="input-block">
              <label htmlFor="instructions">Instruções</label>
              <textarea 
                id="instructions" 
                name="instructions" 
                onChange={handleTextAreaChange}
              />
            </div>

            <div className="input-block">
              <label htmlFor="opening_hours">Horátio de funcionamento</label>
              <input 
                id="opening_hours" 
                name="opening_hours" 
                onChange={handleInputChange}
              />
            </div>

            <div className="input-block">
              <label htmlFor="open_on_weekends">Atende fim de semana</label>

              <div className="button-select">
                <button 
                  type="button" 
                  onClick={() => setOpenOnWeekends(true)}
                  className={open_on_weekends && "active"}
                >
                  Sim
                </button>
                <button 
                  type="button"
                  onClick={() => setOpenOnWeekends(false)}
                  className={!open_on_weekends && "active"}
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

export default CreateOrphanage