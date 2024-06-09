import PropTypes from 'prop-types';
import styles from './Information.module.css';
export const InformationLayout = ({isDraw, isGameEnded, currentPlayer}) => {
	return(
		<div className={styles['information-container']}>
			<div className={`${styles['current-winner']} ${currentPlayer === 'X' ? styles['red'] : styles['blue']}`}>
				{isDraw
					? 'Ничья'
					: isGameEnded
						? `Победа: ${currentPlayer}`
						: `Ходит: ${currentPlayer}`
				}
			</div>
		</div>
	)
}

InformationLayout.propTypes = {
	isDraw: PropTypes.bool,
	isGameEnded: PropTypes.bool,
	currentPlayer: PropTypes.string,
}
