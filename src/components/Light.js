import React from "react";

function Light({ lightbulbs, onItemClicked }) {
  return (
    <div className="container">
      {lightbulbs.map(({ id, flashed }) => (
        <div className="lightbulbs" key={id}>
          {flashed === true ? (
            <img
              className="switched-off"
              src="switched_off.png"
              alt="выключенная лампочка"
            />
          ) : (
            <img 
            className="flash" 
            src="flash.png" 
            alt="включенная лампочка" 
            />
          )}
        </div>
      ))}
    </div>
  );
}

export default Light;
