import { useTimer } from './context/TimerContext';
import TimerButton from './components/TimerButton';
import TimerDisplay from './components/TimerDisplay';

const App = () => {
  const { isDark } = useTimer();
  const bgColor = isDark ? 'black' : 'white';
  const textColor = isDark ? 'white' : 'black';

  return (
    <div style={{
      backgroundColor: bgColor,
      color: textColor,
      width: '100vw',
      height: '100vh',
      margin: 0,
      padding: 0,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    }}>
      <h1> Debounce + Context Timer Task</h1>
      <TimerButton />
      <TimerDisplay />
    </div>
  );
};
export default App;
