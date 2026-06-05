import Section from './components/Section/Section';
import Container from './components/Container/Container';
import Heading from './components/Heading/Heading';
import Text from './components/Text/Text';

function App() {
  return (
    <>
      <Section>
        <Container>
          <Heading align={'right'} underline bottom={50}>
            Task #1
          </Heading>
          <Heading underline bottom={50}>
            Main Title
          </Heading>
          <Heading align="left" underline bottom={50}>
            Left Aligned Heading
          </Heading>
          <Heading align="right" underline bottom={50}>
            Right Aligned Heading
          </Heading>
          <Text>Some text</Text>
        </Container>
      </Section>
    </>
  );
}

export default App;
