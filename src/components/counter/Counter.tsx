import React, { useState } from 'react';
import styled from 'styled-components';


const Counter = () => {
  const [currentValue, setCurrentValue] = useState(0)
  const incrementValue = () => setCurrentValue(currentValue + 1);


  return <>
    <p>Current value is {currentValue}</p>
    <BigButton onClick={incrementValue}>Increment</BigButton>
  </>
}

const BigButton = styled('button')`
  font-size: 15px
`;

export default Counter