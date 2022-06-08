import { useState } from 'react';
import './App.css';
import { Stage, Layer, Rect } from 'react-konva';


function App() {

  const [txt, setTxt] = useState("False");
  const [xAxis, setXAxis] = useState(0);
  const [yAxis, setYAxis] = useState(0);

  const handleMouseMove = (e) => {
     setXAxis(e.target.attrs.x - 100);
     setYAxis(e.target.attrs.y - 100);
  };


  const handleMouseOut = (e) => {
    setTxt(<p> False </p>);
  };

  const handleClick = (e) => {
    setTxt(<p> True </p>);
    
  };

  const handleOver = (e) => {
    setTxt(<p> True </p>);
  };

  return (
    <div className="App">
          <div class="container" style={{display: 'flex'}}>
              <div>
                  <p> Welcome to Fabric Canvas, This work is made by Anurag</p>
                  <p>Shape Clicked/Touched: <span id="clicked">{txt} </span></p>  
                  <p>X- axis position :<span id="xaxis"> {xAxis} </span></p>
                  <p>Y- axis position:  <span id="yaxis"> {yAxis} </span> </p>
              </div>
              <Stage width={1000} height={1000}>
              <Layer>
                <Rect
                  x={100}
                  y={100}
                  width={50}
                  height={50}
                  fill="red"
                  shadowBlur={10}
                  draggable
                  onMouseMove={handleMouseMove}
                  onMouseOver={handleOver}
                  onMouseDown={handleClick}
                  onMouseOut={handleMouseOut}
                />
              </Layer>
            </Stage>
          </div>
    </div>
  );
}

export default App;
