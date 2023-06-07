import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { addNote } from "./reducers/cartSlice";
import NoteCard from "./components/noteCard/noteCard";

function App() {
	const notes = useSelector((state) => state.cart.notes);
	const dispatch = useDispatch();

	return (
		<div className="App">
			<header className="App-header">
				<h2>
					Cart items:
					{notes.map((note, index) => (
						<NoteCard key={index} note={note} index={index}></NoteCard>
					))}
				</h2>
				<div>
					<button
						onClick={() =>
							dispatch(
								addNote({
									newNote: {
										id: 3,
										title: "3sda",
										note: "3aaa",
										date: "3",
										status: "3",
									},
								})
							)
						}
					>
						----
					</button>
				</div>
			</header>
		</div>
	);
}

export default App;
