import { useDispatch, useSelector } from "react-redux";
import { checkForWinner } from "../../../utils/utils";
import { FieldLayout } from "./FieldLayout"
import {
	selectField,
	selectCurrentPlayer,
	selectIsGameEnded
} from '../../../selectors';

export const FieldContainer = () => {
	const field = useSelector(selectField);
	const currentPlayer = useSelector(selectCurrentPlayer);
	const isGameEnded = useSelector(selectIsGameEnded);

	const dispatch = useDispatch();

	const handleClickCellButtons = (id) => {

		if (field[id] === '' && !isGameEnded) {
			const updatedField = field.slice();


			if (field[id] === '' && !isGameEnded) {
				updatedField[id] =  currentPlayer;
				dispatch({ type: 'Field', payload: true})
			} else return false;

			if (checkForWinner(updatedField, currentPlayer)) {
				dispatch({ type: 'isGameEnded', payload: true });
				console.log('isGameEnded')
			} else if (
				!checkForWinner(updatedField, currentPlayer) &&
				!updatedField.some((element) => element === '')
			) {
				dispatch({ type: 'isDraw', payload: true });
				console.log('isDraw')
			} else if (
				!checkForWinner(updatedField, currentPlayer) &&
				updatedField.some((element) => element === '')
			) {
				dispatch({
					type: 'currentPlayer',
					payload: currentPlayer === 'X' ? '0' : 'X',
				});
				console.log('currentPlayer')
			}

			dispatch({
				type: 'field',
				payload: updatedField,
			});
		}
	};

	return <FieldLayout handleClickCellButtons={handleClickCellButtons} />
}
