const app = require("express")();
const http = require("http").Server(app);
const io = require("socket.io")(http);
const cors = require("cors");

const Messages = require("./lib/Messages");

app.use(cors());

/*
Renk örneğinde olduğu gibi socket.io'yu kullanıyoruz.

*/

app.get("/", (req, res) => {
	res.end("Merhaba Socket.IO");
});

/*
connection: Gerçekleştiği anda
*/
io.on("connection", (socket) => {
	console.log("a user connected");

	//redis üzerindeki mesajları alıyoruz. 
	Messages.list((data) => {
		console.log(data);
		//Bağlanmış olan kullanıcıya iletiyoruz.
		socket.emit("message-list", data);
	});

	//Her hangi bir mesaj emit edildiğinde backend'e 
	socket.on("new-message", (message) => {
		console.log(message);
		//Bunu redis'e yazıyoruz.
		Messages.upsert({ message });

		//Sonrasındada bağlı olan diğer clientlara bunu emitliyoruz.
		socket.broadcast.emit("receive-message", message);
	});

	//disconnect ile alakalı event listener'imiz bulunuyor.
	socket.on("disconnect", () => console.log("a user disconnected"));
});

http.listen(process.env.PORT || "3000", () => {
	console.log("listening on *:3000");
});
