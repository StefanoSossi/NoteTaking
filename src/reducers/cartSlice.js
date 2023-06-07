import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
	name: "cart",
	initialState: {
		notes: [
			{
				id: 0,
				title: "sda",
				note: "aaa",
				date: "",
				status: "",
			},
			{
				id: 1,
				title: "asdsda",
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
