import React from 'react';
import TodoItem from 'components/TodoItem';
import './TodoList.scss';
import { useTodosState } from 'contexts/TodosContext';

interface TodoListProps {}

const TodoList = ({}: TodoListProps) => {
  const todos = useTodosState();
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
