import styles from './Information.module.css';
import { useSelector } from 'react-redux';
import {
	selectIsDraw,
	selectIsGameEnded,
	selectCurrentPlayer,
} from '../../../selectors';

export const InformationLayout = () => {
	const currentPlayer = useSelector(selectCurrentPlayer);
	const isDraw = useSelector(selectIsDraw);
	const isGameEnded = useSelector(selectIsGameEnded);

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
