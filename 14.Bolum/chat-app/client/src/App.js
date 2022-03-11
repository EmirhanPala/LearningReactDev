import './App.css';
import { ChatProvider } from './context/ChatContext';
import Container from './components/Container';

/*
Bölüm-14: --> Temel Bileşenlerin Geliştirilmesi

*/

function App() {
  return (
    <ChatProvider>
      <Container />
    </ChatProvider>
  );
}

export default App;
