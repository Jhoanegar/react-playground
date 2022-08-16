import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { isAMultipleOfFive } from '../../utils/numbers'

const Counter = () => {
  const [currentValue, setCurrentValue] = useState<number>(0)
  const [showMessage, setShowMessage] = useState<boolean>(false)
  const incrementValue = () => setCurrentValue(currentValue + 1)
  useEffect(() => {
    if (isAMultipleOfFive(currentValue)) return setShowMessage(true)
    setShowMessage(false)
  }, [currentValue])
  // Implement a useEffect hook that, when the count hits a multiple of 5 it
  // renders a message

  return (
    <div>
      <Container>
        <p>Current value is {currentValue}</p>
        {showMessage ? <span>This number is a multiple of 5</span> : ''}
      </Container>
      <BigButton onClick={incrementValue}>Increment</BigButton>
    </div>
  )
}

const BigButton = styled('button')`
  font-size: 15px;
`
const Container = styled('article')`
  display: flex;
  flex-direction: column;
  margin-bottom: 8px;
`

export default Counter
