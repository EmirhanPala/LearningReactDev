import { createContext, useState } from 'react';

/*
Context altında yapacağımız iş:
Mesajları listeliyecek ve O mesajları manipüle edecek fonksiyonu altta kalan diğer componentlere geçirmek olucak.
*/

const ChatContext = createContext();

//Provider'ımızı oluşturalım. Prop olarakda children'imizide alalım.
export const ChatProvider = ({children}) => {
    const [messages, setMessages] = useState([]);
    const values = {
        messages,
        setMessages,
    };
    return <ChatContext.Provider value={values}>{children}</ChatContext.Provider>
}

export default ChatContext;