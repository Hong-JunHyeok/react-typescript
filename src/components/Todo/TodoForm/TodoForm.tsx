import React, { useState } from 'react';
import './TodoForm.scss';
import { useTodosDispatch } from 'contexts/TodosContext';

interface TodoFormProps {}

const TodoForm = ({}: TodoFormProps) => {
  const [value, setValue] = useState('');
  const dispatch = useTodosDispatch();
  const onSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    dispatch({
      type: 'CREATE',
      text: value,
    });
    setValue('');
  };

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setValue(value);
  };

  return (
    <>
      <form onSubmit={onSubmit} className="todoForm">
        <input
          className="todoForm-input"
          value={value}
          onChange={onChange}
          placeholder="무엇을 하실건가요?"
        />
        <button className="todoForm-button">등록</button>
      </form>
    </>
  );
};

export default TodoForm;
