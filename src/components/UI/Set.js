// import './set.css';
import styled from 'styled-components';

const SetName = styled.p`
  background-color: black;
  border-radius: 10px;
  padding: 5% 5%;
`;

const Set = props => {
  return (
      <SetName className="individualSet">{props.set}</SetName>
  );
};

export default Set;
