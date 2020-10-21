// Native 
import L from 'leaflet';

// Shared
import { MarkerImage } from 'shared/images';

const mapIcon = L.icon({
    iconUrl: MarkerImage,
    iconSize: [58, 68],
    iconAnchor: [29, 68],
    popupAnchor: [0, -60]
})


export default mapIcon