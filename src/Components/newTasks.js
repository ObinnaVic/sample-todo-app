import React, { useState, useEffect } from "react";
const Queue = require("./queue");

function NewTasks() {
  const [newTasks, setNewTask] = useState([]);
  const [remainingTime, setRemainingTime] = useState(3600); // 2 minutes in seconds
  // const [doneTask, setDoneTask] = useState(false);

  const time = 3600;

  

  const addTask = () => {
    const data = Queue.getData;
    setNewTask(data);
  };

  setInterval(() => {
    addTask();
  }, 2000);

  const deleteTask = (id) => {
    Queue.dequeue(id);
    addTask();
  };

  // const TaskDone = (id) => {
  //   arr = arr.filter((item) => {
  //     if (item.id === id && item.color === "white") {
  //       item.color = "red";
  //     }
  //     return {...item, color: item.color};
  //   })
  //   getData();
  // };

  // const RestoreTasks = (id) => {
  //   arr = arr.filter((item) => {
  //     if (item.id === id && item.color === "red") {
  //       item.color = "white";
  //     }
  //     return { ...item, color: item.color };
  //   });
  //   getData();
  // }



  if (newTasks?.length === 0) {
    return (
      <section>
        <h2>Today's Tasks</h2>
        <div className='newTasks empty-tasks'>
          <div>
            <h1>TASK EMPTY</h1>
            <p>Click plus to add new tasks</p>
          </div>
        </div>
      </section>
    );
  }
  return (
    <section>
      
      <h2>Today's Tasks</h2>
      <div className="newTasks">
        {newTasks?.map((item) => {
          const { title, description, id, color } = item;
          return (
            <div
              className="new-task-section"
              style={{ borderColor: color }}
              key={id}
            >
              <div className="tasks-text">
                <h3>{title}</h3>
                <p>{description}</p>
              </div>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="15"
                  height="15"
                  fill="currentColor"
                  className="bi bi-trash-fill"
                  viewBox="0 0 16 16"
                  onClick={() => deleteTask(id)}
                >
                  <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z" />
                </svg>
                {color === "white" ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="15"
                    height="15"
                    fill="currentColor"
                    className="bi bi-check-square-fill"
                    viewBox="0 0 16 16"
                    // onClick={() => TaskDone(id)}
                  >
                    <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm10.03 4.97a.75.75 0 0 1 .011 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.75.75 0 0 1 1.08-.022z" />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="15"
                    height="15"
                    fill="currentColor"
                    class="bi bi-arrow-clockwise"
                    viewBox="0 0 16 16"
                    // onClick={() => RestoreTasks(id)}
                  >
                    <path
                      fillRule="evenodd"
                      d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2v1z"
                    />
                    <path d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466z" />
                  </svg>
                )}
                <div
                  className="circle"
                  style={{
                    animation: `rotate ${time}s linear infinite`,
                  }}
                >
                  <div
                    className="line"
                    style={{
                      animation: `expand ${time}s linear infinite`,
                    }}
                  ></div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default NewTasks;
