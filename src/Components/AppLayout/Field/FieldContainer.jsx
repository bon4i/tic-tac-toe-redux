import { store } from "../../../store";
import { checkForWinner } from "../../../utils/utils";
import { FieldLayout } from "./FieldLayout"

const handleClickCellButtons = (id) => {
	const { field, currentPlayer, isGameEnded } = store.getState();

	if (field[id] === '' && !isGameEnded) {
		const updatedField = field.slice();

		if (checkForWinner(updatedField, currentPlayer)) {
			store.dispatch({ type: 'isGameEnded', payload: true });
		} else if (
			!checkForWinner(updatedField, currentPlayer) &&
            !updatedField.some((element) => element === '')
		) {
			store.dispatch({ type: 'isDraw', payload: true });
		} else if (
			!checkForWinner(updatedField, currentPlayer) &&
            updatedField.some((element) => element === '')
		) {
			store.dispatch({
				type: 'currentPlayer',
				payload: currentPlayer === 'X' ? '0' : 'X',
			});
		}

		store.dispatch({
			type: 'field',
			payload: updatedField,
		});
	}
};


export const FieldContainer = () => {
	return <FieldLayout handleClickCellButtons={handleClickCellButtons} />
}
