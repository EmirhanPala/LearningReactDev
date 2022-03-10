import "./App.css";
import { useEffect, useState } from 'react'
import { init, subscribe } from "./socketApi";
import Palatta from "./components/Palatte";

function App() {
	const [activeColor, setActiveColor] = useState("#282c34");
	useEffect(() => {
		init();

		/*
		subscribe methoduna bir parametre geçtik fonksiyon olarak.
		*/
		subscribe((color) => {
			setActiveColor(color);
		}); //Abonelik işlemimizi burada başlattık.
	}, [])

	/*
	Şimdi renk seçip gönderdiğimiz anda bağlı olan diğer clienta verinin iletilmiş olması(loglanması) lazım.
	Clientlarımız arası kontrol ettiğimizde verinin geldiğini görüyoruz.

	Şimdi yapmamız gereken: subscribe methoduna her renk düştüğü anda bizim rengi değiştirmemiz lazım.
	O yüzdende bir state'ye ihtiyacımız var.
	*/
	return (
		<div className="App" style={{ backgroundColor: activeColor }}>
			<h1>{activeColor}</h1>
			<Palatta activeColor={activeColor} />
		</div>
	);
}

export default App;
