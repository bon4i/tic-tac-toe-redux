import styles from './Information.module.css';
import { store } from '../../../store';
export const InformationLayout = () => {
	const { isDraw, isGameEnded, currentPlayer} = store.getState();

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
	);
};
