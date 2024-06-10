import PropTypes from 'prop-types';
import styles from './AppLayout.module.css';
import { FieldContainer } from "./Field/FieldContainer";
import { InformationContainer } from "./Information/InformationContainer";

export const AppLayout = (props) => {
	return(
		<div>
			<InformationContainer />
			<FieldContainer {...props} />
			<div className={styles['restart-container']}>
				<button
					className={styles['restart-button']}
					onClick={() => props.handleResetGame()}
				>
					Начать заново
				</button>
			</div>
		</div>
	);
}

AppLayout.propTypes = {
	handleResetGame: PropTypes.func,
}

