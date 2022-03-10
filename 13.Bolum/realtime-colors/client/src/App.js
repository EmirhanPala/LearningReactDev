import "./App.css";
import { useEffect } from 'react'
import { init } from "./socketApi";
import Palatta from "./components/Palatta";

function App() {
	/*
	Arayüzümüz hazır. Yapmamız gereken gidip bu backend'e client tarafından bağlantı sağlamak. 
	Bunun için socket.io-client adında bir modülümüz var. Client üzerine onu kurucaz ve onunla kullanmaya çalışıcaz.
	Terminalimize: npm add socket.io-client yazıp ekliyoruz.
	*/

	//useEffect ile didmount anında init fonksiyonumuzu çalıştırıcaz.
	useEffect(() => {
		init();
	}, [])

	/*
	Bağlantı işlemimizi başarıyla gerçekleştirdik. Bundan sonrada her hangi bir renk seçildiğinde ve butona basıldığında bağlı olan bütün clientlara
	Biz bu datayı nasıl iletebiliriz onu görücez.
	*/
	return (
		<div className="App">
			<Palatta />
		</div>
	);
}

export default App;
