// Native
import { Popup as PopupLeaflet } from 'react-leaflet'
import { Link as ReactLink } from 'react-router-dom'
import { FiPlus, FiArrowRight } from 'react-icons/fi'
import styled from 'styled-components'

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    position: relative;
`

export const SideContainer = styled.aside`
    width: 440px;
    padding: 80px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background: linear-gradient(329.54deg, #29B6D1 0%, #00C7C7 100%);
`

export const SideHeader = styled.header``

export const Image = styled.img``

export const Title = styled.h2`
    font-size: 40px;
    font-weight: 800;
    margin-top: 62px;
    line-height: 42px;
`

export const Text = styled.p`
    margin-top: 24px;
    line-height: 28px;
`

export const SideFooter = styled.footer`
    display: flex;
    line-height: 24px;
    flex-direction: column;
`

export const Strong = styled.strong`
    font-weight: 800;
`

export const Button = styled(ReactLink)`
    right: 40px;
    width: 64px;
    z-index: 10;
    bottom: 40px;
    height: 64px;
    display: flex;
    transition: 0.2s;
    position: absolute;
    background: #15c3d6;
    border-radius: 20px;
    align-items: center;
    justify-content: center;
    &:hover {
        background: #17d6eb;
    }
`

export const IconPlus = styled(FiPlus).attrs({
    size: 32,
    color: '#fff'
})``

export const Popup = styled(PopupLeaflet).attrs({
    minWidth: 240,
    maxWidth: 240,
    closeButton: false 
})`
    .leaflet-popup-content-wrapper {
        background: rgba(255, 255, 255, 0.8);
        border-radius: 20px;
        box-shadow: none;
    };

    .leaflet-popup-content {
        color: #0089a5;
        font-size: 20px;
        font-weight: bold;
        margin: 8px 12px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    };

    .leaflet-popup-tip-container {
        display: none;
    }
`

export const Link = styled(ReactLink)`
    width: 40px;
    height: 40px;
    background: #15c3d6;
    box-shadow: 17.2868px 27.6589px 41.4884px rgba(23, 142, 166, 0.16);
    border-radius: 12px;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const IconArrow = styled(FiArrowRight).attrs({
    size: 20,
    color: '#fff'
})``