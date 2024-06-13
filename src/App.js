import { useDispatch } from 'react-redux';
import { AppLayout } from './Components/AppLayout/AppLayout';
import styles from './App.module.css';

export const App = () => {
    const dispatch = useDispatch();
    const handleResetGame = () => {
        dispatch({ type: 'resetGame' });
    };

    return (
        <div className={styles['app-container']}>
            <AppLayout handleResetGame={handleResetGame} />
        </div>
    );
};
