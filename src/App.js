import { useState } from "react";
import styled from "styled-components";

function App() {
  const [count, setCount] = useState(0);
  const increaseCount = () => {
    setCount(count + 1);
  };
  const decreaseCount = () => {
    setCount(count - 1);
  };

  return (
    <Container>
      <Counter>{count}</Counter>
      <IncreaseBtn onClick={increaseCount}>+</IncreaseBtn>
      <DecreaseBtn onClick={decreaseCount}>-</DecreaseBtn>
    </Container>
  );
}

export default App;

const Container = styled.div`
  background-color: #ffe4e1;
  margin: 30px 40px;
  display: inline-block;
  padding: 10px 20px;
`;

const Counter = styled.h1`
  margin-left: 42px;
`;

const IncreaseBtn = styled.button`
  background-color: pink;
  border: none;
  font-size: 30px;
  padding: 5px 13px 5px 13px;
  text-align: center;
  text-decoration: none;
  cursor: pointer;
  border-radius: 50%;
  margin-right: 10px;
`;

const DecreaseBtn = styled.button`
  background-color: skyblue;
  border: none;
  font-size: 30px;
  padding: 5px 16px 5px 16px;
  text-align: center;
  text-decoration: none;
  cursor: pointer;
  border-radius: 50%;
`;
