import { createContext, useState, useContext } from 'react';

/*
Context altında yapacağımız iş:
Mesajları listeliyecek ve O mesajları manipüle edecek fonksiyonu altta kalan diğer componentlere geçirmek olucak.
*/

const ChatContext = createContext();

//Provider'ımızı oluşturalım. Prop olarakda children'imizide alalım.
export const ChatProvider = ({ children }) => {
    const [name, setName] = useState("");
    const [messages, setMessages] = useState([]);
    const values = {
        name,
        setName,
        messages,
        setMessages,
    };
    return <ChatContext.Provider value={values}>{children}</ChatContext.Provider>
}
/*
Tek tek context'i import edip tek tek kullanmaktansa önceki derslerde yaptığımız gibi 
İşimizi kolaylaştırması için useContext'i kullanıcaz.
*/
export const useChat = () => useContext(ChatContext);