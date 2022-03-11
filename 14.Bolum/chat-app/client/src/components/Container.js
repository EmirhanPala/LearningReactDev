/*
Bu container altında bütün işlemleri başlatıcaz.
socket.io'ya bağlanma kısımları vs hepsi burada dönücek. Onun altında diğer componentlerimizide göstericez.

Container içinde ne olacak?
Mesajlarımızın listesi aynı zamanda onun altındaki input bir form olacak.
*/
import React from 'react';
import ChatList from './ChatList';
import ChatForm from './ChatForm';

function Container() {
  return (
    <div>
        <ChatList />
        <ChatForm />
    </div>
  )
}

export default Container