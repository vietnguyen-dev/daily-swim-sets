// import SetsWrapper from "../UI/SetsWrapper";
import styled from "styled-components";

const ChoiceDiv = styled.div`
  background-color: ${(props) => (props.isChosen ? "green" : "blue")};
  margin: 5% 13%;
  padding: 1% 2%;
  border-radius: 5px;
`;

const SelectComponent = styled.select`
    border-radius: 5px;
    padding: 1% 2%;
    font-size: 20px;
    color: white;
    background-color:indigo;
`

const OptionComponent = styled.option`
    border-radius: 5px;
    padding: 1% 2%;
    font-size: 20px;
    color: white;
    background-color:indigo;
`

const DifficultyPicker = props =>{
  const pickDifficulty = (event) =>{
    props.onSetDifficulty(event.target.value);
  }

    return (
      <div>
        <ChoiceDiv isChosen={props.difficulty}>
          {props.difficulty ? <h2>Difficulty: {props.difficulty}</h2>: <h2>Choose Difficulty</h2>} 
        </ChoiceDiv>
        <SelectComponent value={props.difficulty} onChange={pickDifficulty}>
          <OptionComponent value="" disabled="disabled" />
          <OptionComponent value="easy">Easy</OptionComponent>
          <OptionComponent value="intermediate">Intermediate</OptionComponent>
          <OptionComponent value="hard">Hard</OptionComponent>
        </SelectComponent>
      </div>
    );   
}

export default DifficultyPicker;