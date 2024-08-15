import React, { useState } from 'react';
import '../styles/AddTodo.scss'


export default function AddTodo({ addItem }) {
  const [todoItem, setTodoItem] = useState({
    title: '',
  }); // 사용자 입력을 저장할 객체 (id, title, done에 대한 정보를 저장해야하므로 객체)

  const onButtonClick = () => {
    addItem(todoItem); // add 함수 사용.
    setTodoItem({
      title: '', // 상태 초기화
    });
  };

  const enterKeyEventHandler = (e) => {
    if (e.key === 'Enter') {
      onButtonClick()
    }
  }

  return (
    <div className="AddTodo">
      <input
        type="text"
        placeholder="Add your new Todo"
        value={todoItem.title}
        onChange={(e) => setTodoItem({ title: e.target.value })}
        onKeyDown={enterKeyEventHandler}
      />
      <button onClick={onButtonClick}>ADD</button>

    </div>
  );
}