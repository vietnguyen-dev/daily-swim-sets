import './App.css';
import DifficultyPicker from "./components/Logic/DifficultyPicker";
import RandomSets from "./components/UI/RandomSets";

import { useState } from 'react';

let easy = [
  //warm up / cool down
  [
    { id: 1, title: "100 Free easy" },
    { id: 2, title: "100 Back easy" },
    { id: 3, title: "100 Breast easy" },
    { id: 4, title: "100 Pull easy" },
    { id: 5, title: "100 Kick easy" }
  ],
  //mixed
  [
    { id: 6, title: "75 Free 25 Fly easy" },
    { id: 7, title: "IM 50s easy" },
    { id: 8, title: "2 25 Dolphin Kick easy" },
    { id: 9, title: "50 Swim, 50 Pull, 50 Kick, 50 Sprint easy" },
  ],
  //sprint
  [
    { id: 10, title: "8 25 Sprint easy" },
    { id: 11, title: "4 50 Sprint easy" },
    { id: 12, title: "2 100 sprint easy" }
  ]
];

let intermediate = [
  //warm up / cool down
  [
    { id: 13, title: "200 Free intermediate" },
    { id: 14, title: "200 Back intermediate" },
    { id: 15, title: "200 Breast intermediate" },
    { id: 16, title: "200 Pull intermediate" },
    { id: 17, title: "200 Kick intermediate" }
  ],
  //mixed
  [
    { id: 18, title: "150 Free 50 Fly intermediate" },
    { id: 19, title: "IM 75s intermediate" },
    { id: 20, title: "2 50 Dolphin Kick intermediate" },
    { id: 21, title: "100 Swim, 100 Pull, 100 Kick, 100 Sprint intermediate" }
  ],
  //sprint
  [
    { id: 22, title: "8 50 Sprint intermediate" },
    { id: 23, title: "4 100 Sprint intermediate" },
    { id: 24, title: "2 200 sprint intermediate" }
  ]
];

let hard = [
  //warm up / cool down
  [
    { id: 25, title: "400 Free" },
    { id: 26, title: "400 Back" },
    { id: 27, title: "400 Breast" },
    { id: 28, title: "400 Pull" },
    { id: 29, title: "400 Kick" },
  ],
  //mixed
  [
    { id: 30, title: "200 Free 50 Fly" },
    { id: 31, title: "IM 100s" },
    { id: 32, title: "2 100 Dolphin Kick" },
    { id:33, title: "200 Swim, 200 Pull, 200 Kick, 200 Sprint" },
  ],
  //sprint
  [
    { id: 34, title: "8 100 Sprint" },
    { id: 35, title: "4 200 Sprint" },
    { id: 36, title: "2 300 sprint" },
  ],
];

let randomSets = [];


function App() {
  const [difficulty, setDifficulty] = useState("easy");
  const [randomSet, setRandomSet] = useState(randomSets);

  const getDifficulty = (difficultyInputString) => {
    setRandomSet([]);
    setDifficulty(difficultyInputString);
    randomizeSet(baseSets(difficultyInputString));
  };

  const baseSets = (difficultyInput) => {
    if (difficultyInput === "easy") {
      return easy;
    } else if (difficultyInput === "intermediate") {
      return intermediate;
    } else if (difficultyInput === "hard") {
      return hard;
    }
  };

  //have to make sure that there are no repeating Ids
  const randomizeSet = (difficultyArray) => {
    for (let i = 0; i <= 2; i++) {
      let randNum = Math.floor(Math.random * difficultyArray[i].length);
      setRandomSet((prevSet) => {
          return [...prevSet, difficultyArray[i][randNum]];
      });
    } 
    
  };

  return (
    <div>
      <DifficultyPicker
        difficulty={difficulty}
        onSetDifficulty={getDifficulty}
      />
      <RandomSets randomSets={randomSet} />
    </div>
  );
}

export default App;
