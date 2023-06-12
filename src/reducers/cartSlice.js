import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
	name: "cart",
	initialState: {
		notes: [
			{
				id: 0,
				title: "sda",
				note: "aaa asdasd asdasd asdasd asdads ",
				date: "",
				status: "",
			},
			{
				id: 1,
				title:
					"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
				note: "ddd",
				date: "",
				status: "",
			},
			{
				id: 2,
				title:
					"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit",
				note: "ddd",
				date: "",
				status: "",
			},
			{
				id: 3,
				title:
					"est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore ",
				note: "ddd",
				date: "",
				status: "",
			},
			{
				id: 4,
				title:
					"On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those ",
				note: "ddd",
				date: "",
				status: "",
			},
			{
				id: 5,
				title: "asdetetertsda",
				note: "ddd",
				date: "",
				status: "",
			},
			{
				id: 6,
				title: "asdsutyutyutyuda",
				note: "ddd",
				date: "",
				status: "",
			},
			{
				id: 7,
				title: "asdsxcvxcvvcda",
				note: "ddd",
				date: "",
				status: "",
			},
		],
	},
	reducers: {
		addNote: (state, action) => {
			state.notes = [...state.notes, action.payload];
		},
		deleteNote: (state, action) => {
			state.notes = state.notes.filter((note) => note.id !== action.payload);
		},
		editNote: (state, action) => {
			state.notes[action.payload.index] = action.payload.editedNote;
		},
	},
});

export const { addNote, deleteNote, editNote } = cartSlice.actions;

export default cartSlice.reducer;
