import React, { useEffect, useState } from 'react';
import { AppLayout } from './Components/AppLayout/AppLayout';
import { store } from './store.js';
import styles from './App.module.css';

export const App = () => {
    const [, setState] = useState(store.getState());

    useEffect(() => {
        const unsubscribe = store.subscribe(() => {
            setState(store.getState());
        });

        return () => {
            unsubscribe();
        };
    }, []);

    const handleResetGame = () => {
        store.dispatch({ type: 'resetGame' });
    };

    return (
        <div className={styles['app-container']}>
            <AppLayout handleResetGame={handleResetGame} />
        </div>
    );
};
