import { WIN_PATTERNS } from '../data/data';

export const checkForWinner = (cells, player) => {
    return WIN_PATTERNS.some((element) =>
        element.every((item) => cells[item] === player),
    );
};
