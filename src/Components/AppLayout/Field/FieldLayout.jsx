import styles from './Field.module.css';
import { store } from '../../../store';
export const FieldLayout = ({ handleClickCellButtons }) => {
	const { field } = store.getState();

	return(
		<div className={styles['game-filed']}>
			{field.map((item, index) => {
				return (
					<button
						key={index}
						id={index}
						onClick={() => handleClickCellButtons(index)}
						className={`${styles['cell-button']} ${
							item === 'X' ? styles['red'] : styles['blue']
						}`}
					>
						{item}
					</button>
				);
			})}
		</div>
	)
}
