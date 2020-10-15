// Native
import { Link } from 'react-router-dom'
import { FiPlus } from 'react-icons/fi'
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

export const Button = styled(Link)`
    right: 40px;
    width: 64px;
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

export const Icon = styled(FiPlus).attrs({
    size: 32,
    color: '#fff'
})``