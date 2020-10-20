import React, { useEffect, useState } from 'react'

// Native
import { Map, TileLayer, Marker } from 'react-leaflet'

// Services
import api from 'services/api'

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

interface Orphanage {
    id: number;
    name: string;
    latitude: number;
    longitude: number;
}

const OrphanagesMap: React.FC = () => {
    const [orphanages, setOrphanages] = useState<Orphanage[]>([])

    useEffect(() => {
        api.get('orphanages').then(response => {
            setOrphanages(response.data)
        })
    }, [])

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
                
               {orphanages.map(orphanage => {
                   return (
                        <Marker 
                            icon={mapIcon}
                            key={orphanage.id}
                            position={[orphanage.latitude, orphanage.longitude]} 
                        >
                            <Popup>
                                {orphanage.name}
                                <Link to={`/orphanages/${orphanage.id}`}>
                                    <IconArrow />
                                </Link>
                            </Popup>
                        </Marker>
                   )
               })}
            </Map>
            
            <Button to="/orphanages/create" >
                <IconPlus />
            </Button>
        </Container>
    )
}

export default OrphanagesMap