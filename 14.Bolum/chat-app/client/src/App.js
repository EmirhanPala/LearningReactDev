import './App.css';
/*
App.js dosyamızın içerisine context'imizi dahil ediyoruz.
*/
import { ChatProvider } from './context/ChatContext';
import Container from './components/Container';

/*
Bölüm-14: --> Chat Context

Context'imizi hazırladık.
Contextimizden sonra Container adında bir component oluşturduk. 
Bu component altında ChatList ve ChatForm componentlerimizi hazırlayıp göstermiş olduk.
Bundan sonrada gerekli style işlemlerimizi yapıcaz. Sonrasında socket.io bağlantısını yapmaya başlıyabiliriz.

*/

function App() {
  return (
    <ChatProvider>
      <Container />
    </ChatProvider>
  );
}

export default App;
