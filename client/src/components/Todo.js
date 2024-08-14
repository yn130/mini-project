import React, { useState } from 'react';

export default function Todo({ item,deleteItem }) {
  console.log('item >>>>> ', item); // {id: 1, title: 'my todo1', done: false}

  const [todoItem, setTodoItem ] = useState(item);
  const [readOnly, setReadOnly] = useState(true)

  const onDeletedBtnClick = () => {
    deleteItem(todoItem);
  };

  const offReadOnlyMode = () => {
    setReadOnly(false)
  };

  const enterKeyEventHandler = (e) => {
    if (e.key === 'Enter') {
      setReadOnly(true);
    }
  }



  const editEventHandler = (e) => {
    const {title, ...rest} = todoItem;
    setTodoItem( {
      title: e.target.value,
      ...rest,
    });
  };



  const checkBoxEventHandler = (e) => {
    const {done, ...rest } = todoItem;
    setTodoItem({
      done: e.target.checked,
      ...rest
    });
    console.log('난 가짜야',done);

  }
  console.log('내가 진짜야',todoItem);

  return (
    <div className="Todo">
      <input
        type="checkbox"
        id={`todo${todoItem.id}`}
        name={`todo${todoItem.id}`}
        value={`todo${todoItem.id}`}
        defaultChecked={todoItem.done} // true, o // false, x
        onChange={checkBoxEventHandler}
      />
      <input 
        type="text"
        value={todoItem.title}
        readOnly={readOnly}
        onClick={offReadOnlyMode}
        onChange={editEventHandler}
        onKeyDown={enterKeyEventHandler}
      />





      {/* <label htmlFor="todo0">{item.title}</label> */}
      <button onClick={onDeletedBtnClick}>DELETE</button>
    </div>
  );
}