import React from 'react'

// Native
import { useHistory } from 'react-router-dom';

// Shared
import { MarkerImage } from 'shared/images';

// Private
import { Container, Image, Button, Icon } from './styles'

const SideBar: React.FC = () => {
    const { goBack } = useHistory();
    
    return (
        <Container>
            <Image src={MarkerImage} alt="Happy" />

            <footer>
              <Button onClick={goBack}>
                <Icon />
              </Button>
            </footer>
        </Container>
    )
}

export default SideBar