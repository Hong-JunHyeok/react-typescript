import React from 'react';
import './TodoItem.scss';
import { useTodosDispatch, Todo } from 'contexts/TodosContext';

interface TodoItemProps {
  todo: {
    id: number;
    text: string;
    done: boolean;
  };
}

const TodoItem = ({ todo }: TodoItemProps) => {
  const dispatch = useTodosDispatch();

  const onToggle = () => {
    dispatch({
      type: 'TOGGLE',
      id: todo.id,
    });
  };

  const onRemove = () => {
    dispatch({
      type: 'REMOVE',
      id: todo.id,
    });
  };
  return (
    <>
      <div className="todoItem">
        <div className="todoItem-index">{todo.id}</div>
        <div
          className={`todoItem-text ${todo.done ? 'done' : ''}`}
          onClick={onToggle}
        >
          {todo.text}
        </div>
        <div className="todoItem-ItemBtn">
          <span onClick={onRemove}>삭제</span>
        </div>
      </div>
    </>
  );
};

export default TodoItem;
