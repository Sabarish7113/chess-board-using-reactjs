import React, { useState } from 'react';
import './chess.css';

const initialBoardSetup = {
  '0-0': { name: 'rook', image: 'https://cdn-icons-png.flaticon.com/128/1626/1626883.png' },
  '0-1': { name: 'knight', image: 'https://cdn-icons-png.flaticon.com/128/11497/11497377.png' },
  '0-2': { name: 'bishop', image: 'https://cdn-icons-png.flaticon.com/512/107/107618.png' },
  '0-3': { name: 'queen', image: 'https://cdn-icons-png.flaticon.com/128/658/658098.png' },
  '0-4': { name: 'king', image: 'https://cdn-icons-png.flaticon.com/128/1051/1051236.png' },
  '0-5': { name: 'bishop', image: 'https://cdn-icons-png.flaticon.com/512/107/107618.png' },
  '0-6': { name: 'knight', image: 'https://cdn-icons-png.flaticon.com/128/11497/11497377.png' },
  '0-7': { name: 'rook', image: 'https://cdn-icons-png.flaticon.com/128/1626/1626883.png' },
  '1-0': { name: 'pawn', image: 'https://cdn-icons-png.flaticon.com/128/657/657487.png' },
  '1-1': { name: 'pawn', image: 'https://cdn-icons-png.flaticon.com/128/657/657487.png' },
  '1-2': { name: 'pawn', image: 'https://cdn-icons-png.flaticon.com/128/657/657487.png' },
  '1-3': { name: 'pawn', image: 'https://cdn-icons-png.flaticon.com/128/657/657487.png' },
  '1-4': { name: 'pawn', image: 'https://cdn-icons-png.flaticon.com/128/657/657487.png' },
  '1-5': { name: 'pawn', image: 'https://cdn-icons-png.flaticon.com/128/657/657487.png' },
  '1-6': { name: 'pawn', image: 'https://cdn-icons-png.flaticon.com/128/657/657487.png' },
  '1-7': { name: 'pawn', image: 'https://cdn-icons-png.flaticon.com/128/657/657487.png' },


  '6-0': { name: 'pawn', image: 'https://cdn-icons-png.flaticon.com/128/657/657588.png' },
  '6-1': { name: 'pawn', image: 'https://cdn-icons-png.flaticon.com/128/657/657588.png' },
  '6-2': { name: 'pawn', image: 'https://cdn-icons-png.flaticon.com/128/657/657588.png' },
  '6-3': { name: 'pawn', image: 'https://cdn-icons-png.flaticon.com/128/657/657588.png' },
  '6-4': { name: 'pawn', image: 'https://cdn-icons-png.flaticon.com/128/657/657588.png' },
  '6-5': { name: 'pawn', image: 'https://cdn-icons-png.flaticon.com/128/657/657588.png' },
  '6-6': { name: 'pawn', image: 'https://cdn-icons-png.flaticon.com/128/657/657588.png' },
  '6-7': { name: 'pawn', image: 'https://cdn-icons-png.flaticon.com/128/657/657588.png' },
  '7-0': { name: 'rook', image: 'https://cdn-icons-png.flaticon.com/128/1626/1626848.png' },
  '7-1': { name: 'knight', image: 'https://cdn-icons-png.flaticon.com/128/11497/11497350.png' },
  '7-2': { name: 'bishop', image: 'https://cdn-icons-png.flaticon.com/512/11389/11389266.png' },
  '7-3': { name: 'queen', image: 'https://cdn-icons-png.flaticon.com/512/657/657997.png' },
  '7-4': { name: 'king', image: 'https://cdn-icons-png.flaticon.com/128/1051/1051185.png' },
  '7-5': { name: 'bishop', image: 'https://cdn-icons-png.flaticon.com/512/11389/11389266.png' },
  '7-6': { name: 'knight', image: 'https://cdn-icons-png.flaticon.com/128/11497/11497350.png' },
  '7-7': { name: 'rook', image: 'https://cdn-icons-png.flaticon.com/128/1626/1626848.png' },
};

const ChessBoard = () => {
  const [board, setBoard] = useState(initialBoardSetup);
  const [draggedPiece, setDraggedPiece] = useState(null);

  const handleDragStart = (pieceId) => {
    setDraggedPiece(pieceId);
  };

  const handleDrop = (toX, toY) => {
    if (draggedPiece) {
      setBoard((prevBoard) => {
        const newBoard = { ...prevBoard };
        newBoard[`${toX}-${toY}`] = prevBoard[draggedPiece];
        delete newBoard[draggedPiece];
        return newBoard;
      });
      setDraggedPiece(null);
    }
  };

  const renderSquare = (i, j) => {
    const pieceId = `${i}-${j}`;
    const piece = board[pieceId];

    return (
      <div
        key={pieceId}
        className={`square ${(i + j) % 2 === 1 ? 'black' : 'white'}`}
        onDragOver={(e) => e.preventDefault()}
        onDrop={() => handleDrop(i, j)}
      >
        {piece && (
          <div
            draggable
            onDragStart={() => handleDragStart(pieceId)}
            className="piece"
          >
            <img src={piece.image} alt={piece.name} />
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="chess-board-container">
      <div className="chess-board">
        {Array.from({ length: 8 }, (_, i) =>
          Array.from({ length: 8 }, (_, j) => renderSquare(i, j))
        )}
      </div>
    </div>
  );
};

export default ChessBoard;
