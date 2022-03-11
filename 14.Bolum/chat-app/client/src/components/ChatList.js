import React from 'react';
/*
Gönderilen mesajların listeleneceği alan burası.
*/
import styles from './styles.module.css';
import { useChat } from '../context/ChatContext';
import ChatItem from './ChatItem';

function ChatList() {
  const { messages } = useChat();
  //console.log(messages);
  return (
    <div className={styles.chatlist}>
      <div>
        {
          /*
          Context'imizin içerisindeki var olan mesajları alıp burada göstericez.
          Mesaj balonlarımız için ChatItem.js oluşturuyoruz. Ve ona buradan bir prop göndericez.
          */
          //bize gelen chat objesini item olarak gönderiyoruz.
          messages.map((item, key) => (<ChatItem key={key} item={item} />
          ))}
      </div>
    </div>
  )
}

export default ChatList