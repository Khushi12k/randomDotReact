import React, { useState } from 'react';

const App = () => {
  const [circles, setCircles] = useState([]);
  const [deleteCircle, setDeleteCircle] = useState([]);

  const colours = ["red", "blue", "green", "yellow", "indigo", "violet"];

  function handleClick(e) {
    if (e.target.tagName === "BUTTON") return;

    const dotobj = {
      color: colours[Math.floor(Math.random() * colours.length)],
      id: Date.now(),
      x: e.clientX,
      y: e.clientY,
    };
console.log(dotobj)
    setCircles([...circles, dotobj]);
  }

  function resetBtn() {
    setCircles([]);
    setDeleteCircle([]);
  }

  function undoBtn(){
    if(circles.length===0) return
    let print=circles
    let insert=print.pop()
    setDeleteCircle([...deleteCircle,insert])
  }
  function redoBtn(){
    if(deleteCircle.length===0)return
    let print=deleteCircle
    let last=print.pop()
    setCircles([...circles,last])
  }

  return (
    <div onClick={handleClick} className="randomdot">
      <button onClick={resetBtn} disabled={circles.length===0}>Reset</button>
      <button onClick={undoBtn}disabled={circles.length===0}>Undo</button>
      <button onClick={redoBtn} disabled={deleteCircle.length===0}>Redo</button>

      <div>
        {circles.map((circle, index) => (
          <div
            key={circle.id}
            className="circle"
            style={{
              top: circle.y - 7.5 + "px",
              left: circle.x - 7.5 + "px",
              backgroundColor: circle.color,
            }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default App;



















