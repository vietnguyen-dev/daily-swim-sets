import Set from './Set';
import SetsWrapper from "./SetsWrapper";

const RandomSets = props =>{ 
    let filled = props.randomSets;

     if (filled){ 
      return (
        <SetsWrapper>
          { 
            props.randomSets.map( sets =>
              <Set key={sets.id}
              set={sets.title} />
            )}
        </SetsWrapper>
      );
    }  
}

export default RandomSets
