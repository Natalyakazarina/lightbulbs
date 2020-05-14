import React from "react";

function Light({ lightbulbs, onItemClicked }) {
  return (
    <div className="container-lights">
      {lightbulbs.map(({ id, flashed }) => (
        <div className="lightbulbs" key={id}>
          {flashed === true ? (
            <img onClick={onItemClicked}
              className="switched-off"
              src="switched_off.png"
              alt="выключенная лампочка"
            />
          ) : (
            <img onClick={onItemClicked}
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
