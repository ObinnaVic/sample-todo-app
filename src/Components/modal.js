import React, { useState } from 'react'

function Modal({modal, setModal}) {
    const [task, setTask] = useState({title: "", desc: ""});

    const AddTask = () => {
      let id = new Date().getSeconds();
      localStorage.setItem(
        id,
        JSON.stringify({
          Title: task.title,
          Desc: task.desc,
          id: id,
          color: "white"
        })
      );
      setTask({title: "", desc: ""});
      setModal(false);
    }

  return (
    <div className={modal ? "modal" : "hideModal"}>
      <input
        type='text'
        placeholder='TITLE'
        value={task.title}
        onChange={(e) => setTask({ title: e.target.value})}
      />
      <textarea
        name='description'
        cols='37'
        rows='10'
        placeholder='DESCRIPTION'
        value={task.desc}
        onChange={(e) => setTask({...task, desc: e.target.value })}
      ></textarea>
      <button className='addBtn' onClick={AddTask}>
        ADD
      </button>
    </div>
  );
}

export default Modal
