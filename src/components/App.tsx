import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import TodoForm from './Todo/TodoForm';
import TodoList from './Todo/TodoList';
import { TodosContextProvider } from 'contexts/TodosContext';

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
    <TodosContextProvider>
      <GlobalStyle />
      <RootDiv>
        <TodoForm />
        <TodoList />
      </RootDiv>
    </TodosContextProvider>
  );
}

export default App;
