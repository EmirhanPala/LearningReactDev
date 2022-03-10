const app = require("express")();
const http = require("http").createServer(app);
const io = require("socket.io")(http);
const cors = require("cors");
/*
Bu backend socket.io ile çalışıyor.
NodeJS üzerinde bir modül olan socket.io ile çalışıyor. Real time işlemleri yapmamıza olanak(kolaylık) sağlayan kütüphane.

*/
app.use(cors());

app.get("/", (req, res) => {
	res.send("hello");
});

let lastColor = "#282c34";

io.on("connection", (socket) => { 
	/*
	connection gerçekleştiği anda bir kullanıcı bağlandı! diye bir log bırakıyoruz.
	*/
	console.log("Bir kullanıcı bağlandı!");

	socket.emit("receive", lastColor);
	/*
	receive: Kullanıcı ilk olarak backend'e bağlandığı anda client tarafından son renk neyse onu iletiyor ve o renk ekranda gösteriliyor.
	*/


	/*
	Her hangi bir clientten backende bir butona basıldığı anda renk kodu iletildiği anda onu karşıladık.

	newColor kanalından yeni bir renk geldiği anda her hangi bir renk gelmiş (color) sonrada onu logladık.
	*/
	socket.on("newColor", (color) => {
		console.log(color);

		lastColor = color;

		/*
		Sonrasındada diğer bağlı olan tüm clientlara bunu iletmişiz.
		*/
		io.emit("receive", color);
	});

	socket.on("disconnect", () => {
		console.log("Bir kullanıcı ayrıldı.");
	});
});

http.listen(3001, () => console.log("Server is up 🚀 🚀"));
