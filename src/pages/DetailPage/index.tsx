import React, { useEffect, useState } from "react";

// Native
import { Marker, TileLayer } from "react-leaflet";
import { useParams } from 'react-router-dom';
// import { FaWhatsapp } from "react-icons/fa";

// Components
import SideBar from 'components/SideBar'

// Services
import api from 'services/api'

// Utils
import mapIcon from 'utils/mapIcon'
import mapURL from 'utils/mapURL'

// Private
import { 
  Container, 
  Line,
  Main, 
  Content,
  Image,
  DetailContainer,
  Title,
  SubTitle,
  Text,
  ImageContainer,
  ImageButton,
  SmallImage,
  MapContainer,
  MapContainerFooter,
  Link,
  Map,
  OpenDetailSection,
  CardHour,
  Card,
  // ContactButton,
  IconInfo,
  IconClock,
} from './styles'

interface Orphanage {
  name: string;
  latitude: number;
  longitude: number;
  about: string;
  instructions: string;
  opening_hours: string;
  open_on_weekends: boolean;
  image: Array<{
    id: number;
    url: string;
  }>
}

interface RouteParams {
  id: string;
}


const DetailPage: React.FC = () => {
  const params = useParams<RouteParams>() 

  const [orphanage, setOrphanage] = useState<Orphanage>()
  const [activeImageIndex, setActiveImageIndex] = useState(0)

  useEffect(() => {
    api.get(`orphanages/${params.id}`).then(response => {
      setOrphanage(response.data)
    })
  }, [params.id])

  if (!orphanage) {
    return <p>Loading...</p>
  }
  
  return (
    <Container>
      <SideBar />

      <Main>
        <Content>
          <Image 
            src={orphanage.image[activeImageIndex].url} 
            alt={orphanage.name} 
          />

          <ImageContainer>
            {orphanage.image.map((image, index) => {
              return (
                <ImageButton  
                  key={image.id} 
                  onClick={() => setActiveImageIndex(index)}
                  actived={Boolean(activeImageIndex === index)}
                >
                  <SmallImage src={image.url} alt={orphanage.name} />
                </ImageButton>
              )
            })}
          </ImageContainer>
          
          <DetailContainer>
            <Title>{orphanage.name}</Title>
            <Text>{orphanage.about}</Text>

            <MapContainer>
              <Map center={[orphanage.latitude, orphanage.longitude]}>
                <TileLayer url={mapURL} />
                
                <Marker  
                  icon={mapIcon} 
                  interactive={false}
                  position={[orphanage.latitude,orphanage.longitude]} 
                />
              </Map>

              <MapContainerFooter>
                <Link 
                  target="_black" 
                  rel="noopener noreferrer" 
                  href={`https://google.com/maps/dir/?api=1&destination=${orphanage.latitude},${orphanage.longitude}`}
                >
                  Ver rotas no Google Maps
                </Link>
              </MapContainerFooter>
            </MapContainer>

            <Line />

            <SubTitle>Instruções para visita</SubTitle>
            <Text>{orphanage.instructions}</Text>

            <OpenDetailSection>
              <CardHour>
                <IconClock />
                Segunda à Sexta <br />
                {orphanage.opening_hours}
              </CardHour>

              <Card isOpen={orphanage.open_on_weekends}>
                <IconInfo />
                
                {orphanage.open_on_weekends && 'Não' } Atendemos <br />
                fim de semana
              </Card>
            </OpenDetailSection>

            {/* <ContactButton >
              <FaWhatsapp size={20} color="#FFF" />
              Entrar em contato
            </ContactButton> */}
          </DetailContainer>
        </Content>
      </Main>
    </Container>
  );
}

export default DetailPage