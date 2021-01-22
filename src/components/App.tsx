import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

const RootDiv = styled.div`
  display: flex;
  height: 100vh;
  width: 100%;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const GlobalStyle = createGlobalStyle`
  body{
    padding : 0;
    margin : 0;
    box-sizing : border-box;
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <RootDiv>
        <TodoForm />
        <TodoList />
      </RootDiv>
    </>
  );
}

export default App;
