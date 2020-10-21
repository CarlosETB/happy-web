// Native
import { FiClock, FiInfo } from "react-icons/fi";
import { Map as ReactMap } from "react-leaflet";
import styled, { css } from 'styled-components'

export const Container = styled.div`
    display: flex;
    min-height: 100vh;
`

export const Main = styled.main`
    flex: 1;
`

export const Line = styled.hr`
    width: 100%;
    height: 1px;
    border: 0;
    background: #d3e2e6;
    margin: 64px 0;
`

export const Content = styled.div`
    width: 700px;
    overflow: hidden;
    margin: 64px auto;
    border-radius: 20px;
    background: #ffffff;
    border: 1px solid #d3e2e5;
`

export const Image = styled.img`
    width: 100%;
    height: 300px;
    object-fit: cover;
`

export const ImageContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    column-gap: 16px;
    margin: 16px 40px 0;
`

interface ButtonProps {
    actived?: boolean;
}

export const ImageButton = styled.button.attrs({
    type: "button"
})<ButtonProps>`
    border: 0;
    height: 88px;
    opacity: 0.6;
    outline: none;
    cursor: pointer;
    background: none;
    overflow: hidden;
    border-radius: 10px;
    ${({ actived }) =>  actived && 'opacity: 1'}
`

export const SmallImage = styled.img`
    width: 100%;
    height: 88px;
    object-fit: cover;
`

export const DetailContainer = styled.div`
    padding: 80px;
`

export const Title = styled.h1`
    color: #4d6f80;
    font-size: 54px;
    line-height: 54px;
    margin-bottom: 8px;
`

export const SubTitle = styled.h2`
    font-size: 36px;
    line-height: 46px;
    color: #4d6f80;
`

export const Text = styled.p`
    line-height: 28px;
    color: #5c8599;
    margin-top: 24px;
`

export const MapContainer = styled.div`
    margin-top: 64px;
    background: #e6f7fb;
    border: 1px solid #b3dae2;
    border-radius: 10px;
`

export const MapContainerFooter = styled.footer`
    padding: 20px 0;
    text-align: center;
`

export const Map = styled(ReactMap).attrs({
    zoom: 16, 
    dragging: false,
    touchZoom: false,
    zoomControl: false,
    scrollWheelZoom: false,
    doubleClickZoom: false,
})`
    width: 100%; 
    height: 280px;
    .leaflet-container {
        border-bottom: 1px solid #dde3f0;
        border-radius: 10px;
    }
`

export const Link = styled.a`
    line-height: 24px;
    color: #0089a5;
    text-decoration: none;
`

export const OpenDetailSection = styled.section`
    margin-top: 24px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 20px;
`

const CardStyle = css`
    padding: 32px 24px;
    border-radius: 20px;
    line-height: 28px;
    display: flex;
    flex-direction: column;
`

export const CardHour = styled.div`
    background: linear-gradient(149.97deg, #e6f7fb 8.13%, #ffffff 92.67%);
    border: 1px solid #b3dae2;
    color: #5c8599;
    ${CardStyle};
`

interface CardProps {
    isOpen?: boolean;
}

export const Card = styled.div<CardProps>`
    ${CardStyle};
    background: linear-gradient(154.16deg, #edfff6 7.85%, #ffffff 91.03%);
    border: 1px solid #a1e9c5;
    color: #37c77f;
    ${({ isOpen }) => {
        return (
            isOpen &&
            css`
                background: linear-gradient(154.16deg, #fdf0f5 7.85%, #ffffff 91.   03%);
                border: 1px solid #ffbcd4;
                color: #ff669d;
            `
        );
  }}
`

export const ContactButton = styled.button.attrs({
    type: "button" 
})`
    margin-top: 64px;
    width: 100%;
    height: 64px;
    border: 0;
    cursor: pointer;
    background: #3cdc8c;
    border-radius: 10px;
    color: #ffffff;
    font-weight: 800;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: background-color 0.2s;
`

export const IconClock = styled(FiClock).attrs({
    size: 32,
    color: "#15B6D6",
})`
    margin-bottom: 16px;
`

export const IconInfo = styled(FiInfo).attrs({
    size: 32,
    color: "#39CC83",
})`
    margin-bottom: 16px;
`