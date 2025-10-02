import React, { useState } from "react";
import type { Spaceship } from "../types";

type Props = {
  spaceships: Spaceship[];
  addCrewMember: (shipId: number, member: string) => void;
};

const CrewForm: React.FC<Props> = ({ spaceships, addCrewMember }) => {
  const [selectedShip, setSelectedShip] = useState<number | "">("");
  const [memberName, setMemberName] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedShip || !memberName) return;
    addCrewMember(selectedShip, memberName);
    setMemberName("");
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h2>Adicionar Tripulante</h2>
      <select
        value={selectedShip}
        onChange={(e) => setSelectedShip(Number(e.target.value))}
        required
      >
        <option value="">Selecione uma nave</option>
        {spaceships.map((s) => (
          <option key={s.id} value={s.id}>
            {s.name} ({s.crew.length}/{s.crewLimit})
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Nome do tripulante"
        value={memberName}
        onChange={(e) => setMemberName(e.target.value)}
        required
      />
      <button type="submit">Adicionar</button>
    </form>
  );
};

export default CrewForm;
