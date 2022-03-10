import "./App.css";
import { useEffect } from 'react'
import { init } from "./socketApi";
import Palatta from "./components/Palatte";

function App() {

	useEffect(() => {
		init();
	}, [])

	return (
		<div className="App">
			<Palatta />
		</div>
	);
}

export default App;
