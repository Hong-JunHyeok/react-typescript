import React, { useState } from 'react';
import './TodoForm.scss';

interface TodoFormProps {}

const TodoForm = ({}: TodoFormProps) => {
  const [value, setValue] = useState('');
  const onSubmit = (event: React.FormEvent) => {
    event.preventDefault();
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
