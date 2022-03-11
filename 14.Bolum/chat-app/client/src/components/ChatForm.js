import { useState } from 'react'
import styles from './styles.module.css';
import { sendMessage } from '../socketApi';
import { useChat } from '../context/ChatContext';

function ChatForm() {
  const [message, setMessage] = useState("");
  const { setMessages } = useChat();

  const handleSubmit = (e) => {
    //Native davranışı durdurmamız lzm
    e.preventDefault();
    console.log(message);
    //Mesajı gönderenin sağ tarafta yazması için fromMe ekliyoruz. Mesaj Bendenmi olarak true olarak ekliyoruz.
    setMessages((prevState) => [...prevState, { message, fromMe: true }]);

    sendMessage(message);
    setMessage("");
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input className={styles.textInput} value={message} onChange={(e) => setMessage(e.target.value)} />
      </form>
    </div>
  )
}

export default ChatForm