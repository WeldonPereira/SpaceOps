import React, { useState } from "react";
import type { Spaceship } from "../types";

type Props = {
  spaceships: Spaceship[];
  sendMission: (shipId: number) => void;
};

const MissionForm: React.FC<Props> = ({ spaceships, sendMission }) => {
  const [selectedShip, setSelectedShip] = useState<number | "">("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedShip) return;
    sendMission(selectedShip);
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h2>Enviar Missão</h2>
      <select
        value={selectedShip}
        onChange={(e) => setSelectedShip(Number(e.target.value))}
        required
      >
        <option value="">Selecione uma nave</option>
        {spaceships.map((s) => (
          <option key={s.id} value={s.id}>
            {s.name} {s.inMission ? "(Em missão)" : ""}
          </option>
        ))}
      </select>
      <button type="submit">Enviar</button>
    </form>
  );
};

export default MissionForm;
