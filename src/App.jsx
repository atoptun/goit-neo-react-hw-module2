import Section from './components/Section/Section';
import Container from './components/Container/Container';
import Description from './components/Description/Description';
import Options from './components/Options/Options';
import Feedback from './components/Feedback/Feedback';
import useLocalStorage from './hooks/useLocalStorage';

export default function App() {
  const keyStat = 'stats';
  const defaultStat = {
    best: 0,
    good: 0,
    neutral: 0,
    bad: 0,
  };
  const positiveFields = ['best', 'good'];

  const [stats, setStats] = useLocalStorage(keyStat, defaultStat);

  const updateFeedback = feedbackType => {
    setStats(prev => ({ ...prev, [feedbackType]: prev[feedbackType] + 1 }));
  };

  const resetFeedback = () => {
    setStats(defaultStat);
  };

  const totalFeedback = Object.entries(stats).reduce(
    (total, item) => total + item[1],
    0,
  );

  const positiveFeedback = Object.entries(stats).reduce(
    (total, item) => total + (positiveFields.includes(item[0]) ? item[1] : 0),
    0,
  );

  return (
    <>
      <Section>
        <Container>
          <Description />
          <Options
            stats={stats}
            total={totalFeedback}
            onUpdate={updateFeedback}
            onReset={resetFeedback}
          />
          <Feedback
            stats={stats}
            total={totalFeedback}
            positive={positiveFeedback}
          />
        </Container>
      </Section>
    </>
  );
}
