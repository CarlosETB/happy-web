import React from 'react'

// Private
import { Container, Text, Input } from './styles'

interface LayoutProps {
    label?: string; 
    name?: string;
    onChance?: any;
}

const TextInput: React.FC<LayoutProps> = (props) => {
    const { label, name, onChance } = props

    return (
        <Container>
            <Text htmlFor={name}>{label}</Text>
            <Input 
              id={name}
              name={name}
              onChange={onChance}
            />
        </Container>
    )
}

export default TextInput