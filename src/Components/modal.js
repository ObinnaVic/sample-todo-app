import React, { useState } from 'react';
const Queue = require("./queue");


function Modal({modal, setModal}) {
    const [task, setTask] = useState({title: "", desc: ""});


    const AddTask = () => {
      console.log("added");
      Queue.enqueue(task.title, task.desc, "white");
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
