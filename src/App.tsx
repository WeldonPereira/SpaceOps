import React, { useState } from "react";
import type { Spaceship } from "./types";
import SpaceshipForm from "./components/SpaceshipForm";
import CrewForm from "./components/CrewForm";
import MissionForm from "./components/MissionForm";
import SpaceshipList from "./components/SpaceshipList";
import "./App.css";

const App: React.FC = () => {
  const [spaceships, setSpaceships] = useState<Spaceship[]>([]);
  const [nextId, setNextId] = useState(1);

  const addSpaceship = (name: string, pilot: string, crewLimit: number) => {
    const newShip: Spaceship = {
      id: nextId,
      name,
      pilot,
      crewLimit,
      crew: [],
      inMission: false,
    };
    setSpaceships([...spaceships, newShip]);
    setNextId(nextId + 1);
  };

  const addCrewMember = (shipId: number, member: string) => {
    setSpaceships(
      spaceships.map((s) =>
        s.id === shipId && s.crew.length < s.crewLimit
          ? { ...s, crew: [...s.crew, member] }
          : s
      )
    );
  };

  const sendMission = (shipId: number) => {
    setSpaceships(
      spaceships.map((s) =>
        s.id === shipId &&
        !s.inMission &&
        s.crew.length >= Math.floor(s.crewLimit / 3)
          ? { ...s, inMission: true }
          : s
      )
    );
  };

  return (
    <div className="app">
      <h1>SpaceOps</h1>
      <div className="forms">
        <SpaceshipForm addSpaceship={addSpaceship} />
        <CrewForm spaceships={spaceships} addCrewMember={addCrewMember} />
        <MissionForm spaceships={spaceships} sendMission={sendMission} />
      </div>
      <SpaceshipList spaceships={spaceships} />
    </div>
  );
};

export default App;
