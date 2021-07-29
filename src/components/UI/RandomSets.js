import Set from './Set';
// import SetsWrapper from "./SetsWrapper";
import styled from 'styled-components';

const SetsWrapper = styled.div`
  .setContainer {
    background-color: teal;
    margin: 3% 15%;
    padding: 1% 3%;
    border-radius: 15px;
  }

  .timeContainer {
    background-color: green;
  }
`;

const RandomSets = props =>{ 
    // console.log(props.items)
 
    if (props.items.length === 0){
      return <p>No Sets Chosen</p>
    }
    return (
        <SetsWrapper>
          {props.items.map(set => (
            <Set 
              key={set.id}
              set={set.title} 
            />
          ))}
        </SetsWrapper>
      );  
}

export default RandomSets
