import useState from "../lib/useState";

export const BOARD_SIZE = 20;

export const board = Array.from({ length: BOARD_SIZE }, () =>
  Array(BOARD_SIZE).fill(null)
);

export const [currentPlayer, setCurrentPlayer] = useState("X");

export const [isGameOver, setIsGameOver] = useState(false);

export const [winner, setWinner] = useState(null);

export const [isComputerTurn, setIsComputerTurn] = useState(false);
