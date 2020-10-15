// Native
import { FiArrowRight } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const Container = styled.div`
    width: 100vw;
	height: 100vh;
	background: linear-gradient(329.54deg, #29B6D1 0%, #00C7C7 100%);
	display: flex;
	justify-content: center;
    align-items: center;
    padding: 20px 0;
`

interface ContentProps {
    src?: string
}

export const Content = styled.div<ContentProps>`
	width: 100%;
	height: 100%;
	display: flex;
	max-width: 1100px;
	max-height: 680px;
    position: relative;
	flex-direction: column;
    background-size: 450px;
	align-items: flex-start;
    background-repeat: no-repeat;
	justify-content: space-between;
    background-position: 80% center;
    background-image: url(${props => props.src});

`


export const Image = styled.img`
    width: 240px;
    height: 74px;
`

export const Main = styled.main`
    max-width: 350px;
`

export const Title = styled.h1`
    font-size: 76px;
    font-weight: 900;
    line-height: 78px;
`

export const Text = styled.p`
   font-size: 24px;
   margin-top: 40px;
   line-height: 34px;
`

export const Location = styled.div`
	top: 0;
	right: 0;
	display: flex;
	text-align: right;
    position: absolute;
	flex-direction: column;
`

export const Strong = styled.strong`
    font-weight: 800;
`

export const Button = styled(Link)`
    right: 0;
    bottom: 0;
    width: 80px;
    height: 80px;
    display: flex;
    transition: 0.2s;
    position: absolute;
    background: #ffd666;
    border-radius: 30px;
    align-items: center;
    justify-content: center;
    &:hover {
        background: #96feff
    }
`

export const Icon = styled(FiArrowRight).attrs({
    size: 26,
    color: 'rgba(0, 0, 0, 0.6)'
})``