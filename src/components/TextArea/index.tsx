import React from 'react'
 
// Private
import { Container, Text, Detail, Input } from './styles'

interface LayoutProps {
    name?: string;
    label?: string; 
    onChance?: any;
    maxLength?: number;
}

const TextArea: React.FC<LayoutProps> = (props) => {
    const { label, name, maxLength, onChance } = props

    return (
        <Container>
            <Text htmlFor={name}>
                {label} 
                
                <Detail>
                    {maxLength && `Máximo de ${maxLength} caracteres` }
                </Detail>
            </Text>
            <Input 
              id={name}
              name={name}
              onChange={onChance}
              maxLength={maxLength || undefined}
            />
        </Container>
    )
}

export default TextArea