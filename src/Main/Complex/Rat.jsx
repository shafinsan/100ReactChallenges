import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { MyRat } from "../../Utility/ImageUtility"; 
import { findPath } from "../../Utility/Rat";

function Rat() {
  const [row, setRow] = useState(0);
  const [col, setCol] = useState(0);
  const [maze, setMaze] = useState([]);
  const [move, setMove] = useState(false);
  const [Mx, setMx] = useState([]); 
  const [My, setMy] = useState([]); 
  const [myDuration, setDuration] = useState(0);

  useEffect(() => {
    let value = Array(Math.max(0, Math.min(8, parseInt(row))))
      .fill()
      .map(() => Array(Math.max(0, Math.min(8, parseInt(col)))).fill(0));
    setMaze(value);
    setMx(0);
    setMy(0);
  }, [row, col]);

  const handleWall = (r, c) => {
    if (r === 0 && c === 0) return;
    if (r === row - 1 && c === col - 1) return;
    const newMaze = [...maze];
    newMaze[r][c] = newMaze[r][c] === 0 ? 1 : 0;
    setMaze(newMaze);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let updatedValue = findPath(maze);
    if (updatedValue.length === 0) {
      alert("Invalid Path");
      setRow(0);
      setCol(0);
      return;
    }
    
    const random = Math.floor(Math.random() * updatedValue.length);
    const currentValue = updatedValue[random];
  
    let tempSteps = []; // Stores { x, y } movements
    let currentX = 0;
    let currentY = 0;
    
    for (let i = 0; i < currentValue.length; i++) {
      if (currentValue[i] === "R") {
        currentX += 44;
      } else if (currentValue[i] === "L") {
        currentX -= 44;
      } else if (currentValue[i] === "D") {
        currentY += 50;
      } else if (currentValue[i] === "U") {
        currentY -= 50;
      }
      tempSteps.push({ x: currentX, y: currentY });
    }
  
    setMx(tempSteps.map(step => step.x));
    setMy(tempSteps.map(step => step.y));
    setMove(!move);

    // Calculate duration based on row and column size
    const gridSize = row * col;
    let duration = gridSize <= 4 ? 1 : gridSize <= 9 ? 1.5 : gridSize <= 16 ? 2 : gridSize <= 25 ? 2.5 : 3;
    setDuration(duration);
  };
  
  return (
    <div className="m-4">
      <div className="p-2">
        <div className="flex flex-col justify-center items-center">
          {maze.map((rows, r) => (
            <div key={r} className="flex justify-center items-center m-1">
              {rows.map((cols, c) => (
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  exit={{ opacity: 0, y: -20 }}
                  onClick={() => handleWall(r, c)}
                  key={c}
                  className={`${
                    maze[r][c] === 1
                      ? "bg-green-500 border-2 border-green-500"
                      : "border-2 relative"
                  } px-4 py-4 m-1 active:scale-95 rounded`}
                >
                  {r === 0 && c === 0 ? (
                    <motion.img
                      initial={{ x: 0, y: 0 }}
                      animate={{ x: move ? Mx : 0, y: move ? My : 0 }}
                      transition={{ duration: myDuration }}
                      src={MyRat}
                      className="w-full h-full object-cover rounded absolute left-0 right-0 -translate-y-[45%]"
                    />
                  ) : null}
                  {r === row - 1 && c === col - 1 ? (
                    <img
                      src={"https://png.pngtree.com/png-clipart/20230817/original/pngtree-destination-flag-marker-checkpoint-pole-picture-image_7997836.png"}
                      className="w-full h-full object-cover rounded absolute left-0 right-0 -translate-y-[45%]"
                    />
                  ) : null}
                </motion.div>
              ))}
            </div>
          ))}
        </div>
      </div>

      <form
        onSubmit={handleSubmit}
        className="m-auto w-[340px] h-[200px] border-2 flex flex-col justify-center items-center space-y-2"
      >
        <label className="w-[100%] flex justify-around items-center space-x-3">
          <div>Enter row: </div>
          <input
            type="number"
            value={row}
            min={0}
            max={8}
            onChange={(e) => setRow(Math.min(8, Math.max(0, parseInt(e.target.value) || 0)))}
            className="outline-2 rounded p-1"
          />
        </label>
        <label className="w-[100%] flex justify-around items-center space-x-3">
          <div>Enter col:</div>
          <input
            type="number"
            value={col}
            min={0}
            max={8}
            onChange={(e) => setCol(Math.min(8, Math.max(0, parseInt(e.target.value) || 0)))}
            className="outline-2 rounded p-1"
          />
        </label>
        <button
          type="submit"
          className="px-4 py-1 text-white bg-gray-600 active:scale-95 rounded"
        >
          Start
        </button>
      </form>
    </div>
  );
}

export default Rat;
