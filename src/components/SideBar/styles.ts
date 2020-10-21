// Native
import { FiArrowLeft } from "react-icons/fi";
import styled from 'styled-components'

export const Container = styled.aside`
    position: fixed;
    height: 100%;
    padding: 32px 24px;
    background: linear-gradient(329.54deg, #15b6d6 0%, #15d6d6 100%);
  
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`

export const Image = styled.img`
    width: 48px;
`

export const Button = styled.button.attrs({
    type: "button"
})`
    width: 48px;
    height: 48px;
  
    border: 0;
  
    background: #12afcb;
    border-radius: 16px;
  
    cursor: pointer;
  
    transition: background-color 0.2s;
  
    display: flex;
    justify-content: center;
    align-items: center;

    &:hover {
        background: #17d6eb;
    }
`

export const Icon = styled(FiArrowLeft).attrs({
    size: 24,
    color: '#fff'
})``