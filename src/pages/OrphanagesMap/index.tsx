import React from 'react'

// Native
import { Map, TileLayer, Marker } from 'react-leaflet'

// Shared
import { MarkerImage } from 'shared/images'

// Utils
import mapIcon from 'utils/mapIcon'

// Private
import { 
    Container, 
    SideContainer, 
    SideHeader, 
    Image, 
    Title, 
    Text, 
    SideFooter,
    Strong,
    Button,
    IconPlus,
    Popup,
    Link,
    IconArrow
} from './styles'

const OrphanagesMap: React.FC = () => {
    return (
        <Container>
            <SideContainer>
                <SideHeader>
                    <Image src={MarkerImage} alt="Happy"></Image>
                    <Title>Escolha um orfanato no mapa</Title>
                    <Text>Muitas crianças estão esperando a sua visita :)</Text>
               </SideHeader>
               
               <SideFooter>
                    <Strong>São Paulo</Strong>
                    <span>Paulínia</span>
               </SideFooter>
            </SideContainer>

            <Map 
                style={{ width: '100%', height: '100%', zIndex: 0 }} 
                center={[-22.7306128,-47.1849677]} 
                zoom={15}
            >
                <TileLayer 
                    url='https://a.tile.openstreetmap.org/{z}/{x}/{y}.png' 
                />

                <Marker 
                    icon={mapIcon}
                    position={[-22.7306128,-47.1849677]} 
                >
                    <Popup>
                        Lar das meninas
                        <Link to='/orphanages/1'>
                            <IconArrow />
                        </Link>
                    </Popup>
                </Marker>
            </Map>
            
            <Button to="/orphanages/create" >
                <IconPlus />
            </Button>
        </Container>
    )
}

export default OrphanagesMap