import PropTypes from 'prop-types';
import styles from './Field.module.css';
export const FieldLayout = ({field, handleClickCellButtons}) => {
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

FieldLayout.propTypes = {
	field: PropTypes.array,
	handleClickCellButtons: PropTypes.func,
};
