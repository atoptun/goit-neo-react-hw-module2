import Section from './components/Section/Section';
import Container from './components/Container/Container';
import Heading from './components/Heading/Heading';

function App() {
  return (
    <>
      <Section>
        <Container>
          <Heading title="Task #1" bottom />
        </Container>
      </Section>

      <Section>
        <Container>
          <Heading title="Task #2" bottom />
        </Container>
      </Section>

      <Section>
        <Container>
          <Heading title="Task #3" bottom />
        </Container>
      </Section>
    </>
  );
}

export default App;
