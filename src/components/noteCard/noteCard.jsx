import "./style.css";
import { FiEdit2, FiTrash2 } from "react-icons/fi";
import { useDispatch } from "react-redux";
import { deleteNote, editNote } from "../../reducers/cartSlice";
const NoteCard = ({ note, index }) => {
	const dispatch = useDispatch();
	return (
		<div className="card">
			<h3 className="card__title">{note.title}</h3>
			<p className="card__content">{note.note}</p>
			<div className="card__date">{note.date}</div>
			<div
				className="card__edit"
				onClick={() => dispatch(editNote({ index: index, editedNote: note }))}
			>
				<FiEdit2></FiEdit2>
			</div>
			<div
				className="card__delete"
				onClick={() => dispatch(deleteNote(note.id))}
			>
				<FiTrash2></FiTrash2>
			</div>
		</div>
	);
};

export default NoteCard;
