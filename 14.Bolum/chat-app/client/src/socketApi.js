import io from 'socket.io-client';

let socket;
/*
Backend'imize mesajın iletilmesi:
*/
export const init = () => {
    console.log("Connecting...");
    socket = io("http://localhost:3000", {
        transports: ["websocket"],
    });

    socket.on("connect", () => console.log("Connected!"));
};

export const sendMessage = (message) => {
    if(socket) socket.emit("new-message", message);
};

//Mesajları dinleyecek tanıma ihtiyacımız var.
export const subscribeChat = (cb) => {
    if(!socket) return;

    socket.on("receive-message", (message) => {
        console.log("Yeni mesaj var", message);
        cb(message);
    });
};

export const subscribeInitialMessages = (cb) => {
    if(!socket) return;

    socket.on("message-list", (messages) => {
        console.log("Initial", messages);
        cb(messages);
    });
}