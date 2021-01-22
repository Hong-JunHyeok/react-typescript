import React from 'react';
import TodoItem from 'components/TodoItem';
import './TodoList.scss';

interface TodoListProps {}

const TodoList = ({}: TodoListProps) => {
  const todos = [
    {
      id: 1,
      text: 'contextAPI배우기',
      done: true,
    },
    {
      id: 2,
      text: 'TypeScript 배우기',
      done: true,
    },
    {
      id: 3,
      text: 'TypeScript 와 Context API 함께 사용하기',
      done: false,
    },
  ];
  return (
    <>
      <div className="todoList">
        {todos.length === 0 ? (
          <>오늘 할 일을 등록하세요!</>
        ) : (
          todos.map((todo) => <TodoItem todo={todo} />)
        )}
      </div>
    </>
  );
};

export default TodoList;
