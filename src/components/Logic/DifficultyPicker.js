import './DifficultyPicker.css';
import SetsWrapper from "../UI/SetsWrapper";

const DifficultyPicker = props =>{
  const pickDifficulty = (event) =>{
    props.onSetDifficulty(event.target.value);
  }

    return (
      <div>
        <SetsWrapper className="difficultyChosen">
          <h2>Difficulty: {props.difficulty}</h2>
        </SetsWrapper>
        <select value={props.difficulty} onChange={pickDifficulty}>
          <option value="easy">Easy</option>
          <option value="intermediate">Intermediate</option>
          <option value="hard">Hard</option>
        </select>
      </div>
    );   
}

export default DifficultyPicker;