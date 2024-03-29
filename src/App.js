import "./App.css";
import UseEffectDemo from "./components/useEffect/useEffectDemo1";
import UseReduceDemo from "./components/useReduce/useReduceDemo";
import UseRefDemo from "./components/useRefDemo/useRefDemo";
import UseState from "./components/useState/useState";
import UseStateDemo from "./components/useState/useStateDemo";
import UseLayoutHook from "./components/useLayoutHook/useLayoutHook";
import UseMemoDemo from "./components/useMemoDemo/useMemoDemo";
function App() {
	return (
		<div className="App">
			<UseState />
			<br />
			<UseStateDemo />
			<br />
			<UseEffectDemo />
			<br />
			<UseReduceDemo />
			<br />
			<UseRefDemo />
			<br />
			<UseLayoutHook />
			<br />
			<UseMemoDemo />
		</div>
	);
}

export default App;
