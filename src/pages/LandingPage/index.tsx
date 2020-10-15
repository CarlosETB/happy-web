import React from 'react';

// Assets
import logoImg from '../../assets/images/logo.svg'
import landing from '../../assets/images/landing.svg'

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
      <Content src={landing}>
        <Image src={logoImg} alt="Happy" />

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

          <Button href="" className="enter-app">
            <Icon />
          </Button>
        </Main>
      </Content>
    </Container>
  );
}

export default LandingPage;
