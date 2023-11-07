import React, { useState } from 'react';
const Queue = require("./queue");


function Modal({modal, setModal}) {
    const [task, setTask] = useState({title: "", desc: ""});
    const [time, setTime] = useState(0);


    const AddTask = () => {
      Queue.enqueue(task.title, task.desc, "white");
      setTask({title: "", desc: ""});
      setModal(false);
    }

  return (
    <div className={modal ? "modal" : "hideModal"}>
      <input
        type="text"
        placeholder="TITLE"
        value={task.title}
        onChange={(e) => setTask({ title: e.target.value })}
      />

      <textarea
        name="description"
        cols="37"
        rows="10"
        placeholder="DESCRIPTION"
        value={task.desc}
        onChange={(e) => setTask({ ...task, desc: e.target.value })}
      ></textarea>

      {/* <div>
        <p>Add a timeframe for the task. This should not be more than an hour. 
          Please break down all tasks into hourly chunks as this will help you 
          complete more tasks faster and efficiently</p>
        <div className="timesetter">
          <button onClick={() => setTime((prevTime) => +prevTime - 1)}>
            -
          </button>
          <input
            type="number"
            value={time}
            onChange={(e) => setTime(e.target.value)}
          />
          <button onClick={() => setTime((prevTime) => +prevTime + 1)}>
            +
          </button>
        </div>
      </div> */}
      <button className="addBtn" onClick={AddTask}>
        ADD
      </button>
    </div>
  );
}

export default Modal
