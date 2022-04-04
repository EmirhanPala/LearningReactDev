import { useState } from "react";
import styles from "./styles.module.css";
import { sendMessage } from "../socketApi";
import { useChat } from "../context/ChatContext";

function ChatForm() {
  const [error, setError] = useState(true);
  const [message, setMessage] = useState("");
  const [name, setName] = useState("");
  const { setMessages } = useChat();

  const handleSubmitName = (e) => {
     setName(e.target.value);
    if (message === null || message === ""){
      e.preventDefault();
      setError(false);
    } else {

    }
  };

  const handleSubmit = (e) => {
    if (name === "" || name === null || message === null || message === "") {
      e.preventDefault();
      setError(false);
    } else {
      //Native davranışı durdurmamız lzm
      e.preventDefault();
      setError(true);
      //console.log(message);

      //Mesajı gönderenin sağ tarafta yazması için fromMe ekliyoruz. Mesaj Bendenmi olarak true olarak ekliyoruz.
      setMessages((prevState) => [
        ...prevState,
        { name, message, fromMe: true },
      ]);
      sendMessage(name + ": " + message);
      setMessage("");
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmitName}>
        <input
          className={styles.textInput}
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="İsminizi girin."
        />
      </form>
      <form onSubmit={handleSubmit}>
        <input
          className={styles.textInput}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Gönderilecek mesajınızı yazıp enterleyin."
        />
      </form>

      <div>
        <h3>{!error ? "İsim ve mesaj kısmı boş bırakılamaz!" : ""}</h3>
      </div>
    </div>
  );
}

export default ChatForm;
