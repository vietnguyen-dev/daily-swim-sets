import './App.css';
import DifficultyPicker from "./components/Logic/DifficultyPicker";
import RandomSets from "./components/UI/RandomSets";

import { useState } from 'react';

let Easy = [
  //warm up / cool down
    { id: 1, title: "100 Free" },
    { id: 2, title: "100 Back" },
    { id: 3, title: "100 Breast" },
    { id: 4, title: "100 Pull" },
    { id: 5, title: "100 Kick" },
    { id: 6, title: "75 Free 25 Fly" },
    { id: 7, title: "IM 50s" },
    { id: 8, title: "2 25 Dolphin Kick easy" },
    { id: 9, title: "50 Swim, 50 Pull, 50 Kick, 50 Sprint" },
    { id: 10, title: "8 25 Sprint" },
    { id: 11, title: "4 50 Sprint" },
    { id: 12, title: "2 100 sprint" },
];

let Intermediate = [
    { id: 13, title: "200 Free" },
    { id: 14, title: "200 Back" },
    { id: 15, title: "200 Breast" },
    { id: 16, title: "200 Pull" },
    { id: 17, title: "200 Kick" },
    { id: 18, title: "150 Free 50 Fly" },
    { id: 19, title: "IM 75s" },
    { id: 20, title: "2 50 Dolphin Kick" },
    { id: 21, title: "100 Swim, 100 Pull, 100 Kick, 100 Sprint" },
    { id: 22, title: "8 50 Sprint" },
    { id: 23, title: "4 100 Sprint" },
    { id: 24, title: "2 200 sprint" }
];

let Hard = [
    { id: 25, title: "400 Free" },
    { id: 26, title: "400 Back" },
    { id: 27, title: "400 Breast" },
    { id: 28, title: "400 Pull" },
    { id: 29, title: "400 Kick" },
    { id: 30, title: "200 Free 50 Fly" },
    { id: 31, title: "IM 100s" },
    { id: 32, title: "2 100 Dolphin Kick" },
    { id: 33, title: "200 Swim, 200 Pull, 200 Kick, 200 Sprint" },
    { id: 34, title: "8 100 Sprint" },
    { id: 35, title: "4 200 Sprint" },
    { id: 36, title: "2 300 sprint" },
];

function App() {
  const [difficulty, setDifficulty] = useState("");
  const [randomSet, setRandomSet] = useState([]);

  const getDifficulty = difficultyInputString => {
    setRandomSet([]);
    setDifficulty(difficultyInputString);
    setRandomSet(baseSets(difficultyInputString));
  };
  

  const baseSets = (difficultyInput) => {
    if (difficultyInput === "easy") {
      return Easy;
    } else if (difficultyInput === "intermediate") {
      return Intermediate;
    } else if (difficultyInput === "hard") {
      return Hard;
    }
  };

  return (
    <div>
      <DifficultyPicker
        difficulty={difficulty}
        onSetDifficulty={getDifficulty}
      />
      <RandomSets items={randomSet} />
    </div>
  );
}

export default App;
