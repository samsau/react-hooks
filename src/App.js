import "./App.css";
import UseEffectDemo from "./components/useEffect/useEffectDemo1";
import UseState from "./components/useState/useState";
import UseStateDemo from "./components/useState/useStateDemo";

function App() {
	return (
		<div className="App">
			<UseState />
			<br />
			<UseStateDemo />
			<br />
			<UseEffectDemo />
			<br />
		</div>
	);
}

export default App;
