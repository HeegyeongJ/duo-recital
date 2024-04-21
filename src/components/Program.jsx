import React from "react";

const Program = ({ program, emphsize }) => {
  return (
    <div>
      <div className="program-info">
        <div>
          <p className="display-font bold">{program.composer}</p>
          <p className="display-font">{program.piece}</p>
          {program.subTitle && (
            <p className="display-font">{program.subTitle}</p>
          )}
        </div>
        <div>
          <p>{program.player1}</p>
          <p>{program.player2}</p>
        </div>
      </div>
      <p className="program-description">{program.description}</p>
    </div>
  );
};

export default Program;
