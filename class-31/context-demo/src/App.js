import './App.css';
import Main from './components/Main';
import ThemeProvider from './context/theme';
import FruitsProvider from './context/fruits';

function App() {
  return (
    <ThemeProvider>
      <FruitsProvider>
        <Main />
      </FruitsProvider>
    </ThemeProvider>
  );
}

export default App;
