import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "./reducers/cartSlice";

function App() {
	const count = useSelector((state) => state.cart.value);
	const dispatch = useDispatch();

	return (
		<div className="App">
			<header className="App-header">
				<h2> Cart items : {count} </h2>
				<div>
					<button onClick={() => dispatch(decrement())}> - </button>
					<button onClick={() => dispatch(increment())}> + </button>
				</div>
			</header>
		</div>
	);
}

export default App;
