import React from "react";
import type { Spaceship } from "../types";

type Props = {
  spaceships: Spaceship[];
};

const SpaceshipList: React.FC<Props> = ({ spaceships }) => {
  if (spaceships.length === 0) return <p>Nenhuma nave registrada.</p>;

  return (
    <div className="spaceship-list">
      {spaceships.map((s) => (
        <div key={s.id} className="spaceship-card">
          <h3>{s.name}</h3>
          <p>Piloto: {s.pilot}</p>
          <p>
            Tripulação: {s.crew.length}/{s.crewLimit}
          </p>
          <p>Em missão: {s.inMission ? "Sim" : "Não"}</p>
          {s.crew.length > 0 && <p>Tripulantes: {s.crew.join(", ")}</p>}
        </div>
      ))}
    </div>
  );
};

export default SpaceshipList;
