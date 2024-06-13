import { useSelector } from 'react-redux';
import { selectField } from '../../../selectors';
import styles from './Field.module.css';

export const FieldLayout = ({ handleClickCellButtons }) => {
	const field = useSelector(selectField);

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
