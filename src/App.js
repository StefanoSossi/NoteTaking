import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { addNote } from "./reducers/cartSlice";
import NoteCard from "./components/noteCard/noteCard";
import Masonry from "react-masonry-css";
import Grid from "@mui/material/Grid";
function App() {
	const notes = useSelector((state) => state.cart.notes);
	const dispatch = useDispatch();
	const getColumnSpan = (noteIndex) => {
		if (noteIndex % 6 === 0) {
			return 2; // Set column span to 2 for every 6th note
		}
		return 1;
	};

	return (
		<div className="App">
			<header className="App-header">
				<h2>Cart items:</h2>
				<Masonry
					breakpointCols={3}
					className="my-masonry-grid"
					columnClassName="my-masonry-grid_column"
				>
					{notes.map((note, index) => (
						<Grid item key={index} xs={12} sm={6} md={getColumnSpan(index)}>
							<NoteCard key={index} note={note} index={index}></NoteCard>
						</Grid>
					))}
				</Masonry>
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
