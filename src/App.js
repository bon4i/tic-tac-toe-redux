import React, { useState } from 'react';
import styles from './App.module.css';
import { AppLayout } from './Components/AppLayout/AppLayout';
import { WIN_PATTERNS } from './data/data.js';

export const App = () => {
    const fieldArray = ['', '', '', '', '', '', '', '', ''];
    const [currentPlayer, setCurrentPlayer] = useState('X');
    const [isGameEnded, setIsGameEnded] = useState(false);
    const [isDraw, setIsDraw] = useState(false);
    const [field, setField] = useState(fieldArray);

    const handleClickCellButtons = (id) => {
        const updateField = field.slice();
        if (field[id] === '' && !isGameEnded) {
            updateField[id] = currentPlayer;
            setField(updateField);
        } else return false;

        if (checkForWinner(updateField, currentPlayer)) {
            setIsGameEnded(true);
            return false;
        } else if (
            !checkForWinner(updateField, currentPlayer) &&
            !updateField.some((element) => element === '')
        ) {
            setIsDraw(true);
        }
        setCurrentPlayer(currentPlayer === 'X' ? '0' : 'X');
    };

    const handleResetGame = () => {
        setCurrentPlayer('X');
        setIsGameEnded(false);
        setIsDraw(false);
        setField(fieldArray);
    };

    const checkForWinner = (cells, player) => {
        return WIN_PATTERNS.some((element) =>
            element.every((item) => cells[item] === player),
        );
    };

    return (
        <div className={styles['app-container']}>
            <AppLayout
                field={field}
                isDraw={isDraw}
                isGameEnded={isGameEnded}
                currentPlayer={currentPlayer}
                handleClickCellButtons={handleClickCellButtons}
                handleResetGame={handleResetGame}
            />
        </div>
    );
};
