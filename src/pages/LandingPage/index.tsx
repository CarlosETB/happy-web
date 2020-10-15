import React from 'react';

// Shared
import { Logo, LandingImage } from 'shared/images'

// Private
import { 
  Container, 
  Content, 
  Location, 
  Strong,
  Button,
  Image,
  Main,
  Title,
  Text,
  Icon
} from './styles'

const LandingPage:React.FC = () => {
  return (
    <Container>
      <Content src={LandingImage}>
        <Image src={Logo} alt="Happy" />

        <Main>
          <Title>
            Leve felicidade para o mundo
          </Title>
         
          <Text>
            Visite orfanatos e mude o dia de muitas crianças.
          </Text>

          <Location>
            <Strong>São Paulo</Strong>
            <span>Paulínia</span>
          </Location>

          <Button to='/map'>
            <Icon />
          </Button>
        </Main>
      </Content>
    </Container>
  );
}

export default LandingPage;
