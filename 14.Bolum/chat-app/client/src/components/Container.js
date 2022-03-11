import { useEffect } from 'react';
import ChatList from './ChatList';
import ChatForm from './ChatForm';

import { init } from '../socketApi';

function Container() {
  //didmount anında
  useEffect(() => {
    //backend'imize bağlantımızı sağladık.
    init();
    /*
    connection ilk gerçekleştiği anda bize bir data geliyor.
    kaç mesaj varsa onlar elimize ulaşmış oluyor.
    */
  }, [])
  return (
    <div className='App'>
      <ChatList />
      <ChatForm />
    </div>
  )
}

export default Container