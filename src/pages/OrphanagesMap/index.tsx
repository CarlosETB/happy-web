import React from 'react'

// Private
import { Map, TileLayer } from 'react-leaflet'

// Shared
import { MarkerImage } from 'shared/images'

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
    Icon
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
                center={[-22.7306128,-47.1849677]}
                zoom={15}
                style={{ width: '100%', height: '100%' }}
            >
                <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            </Map>
            
            <Button to="" >
                <Icon />
            </Button>
        </Container>
    )
}

export default OrphanagesMap