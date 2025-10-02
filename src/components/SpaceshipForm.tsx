import React, { useState } from "react";

type Props = {
  addSpaceship: (name: string, pilot: string, crewLimit: number) => void;
};

const SpaceshipForm: React.FC<Props> = ({ addSpaceship }) => {
  const [name, setName] = useState("");
  const [pilot, setPilot] = useState("");
  const [crewLimit, setCrewLimit] = useState(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !pilot || crewLimit <= 0) return;
    addSpaceship(name, pilot, crewLimit);
    setName("");
    setPilot("");
    setCrewLimit(0);
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h2>Registrar Nave</h2>
      <input
        type="text"
        placeholder="Nome da nave"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Nome do piloto"
        value={pilot}
        onChange={(e) => setPilot(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Limite de tripulação"
        value={crewLimit}
        onChange={(e) => setCrewLimit(Number(e.target.value))}
        required
      />
      <button type="submit">Registrar</button>
    </form>
  );
};

export default SpaceshipForm;
