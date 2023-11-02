import { useEffect, useState } from "react";
import "./App.css";
import profile from "./images/profile.png";
import NewTasks from "./Components/newTasks";
import Modal from "./Components/modal";

function App() {
  const [greeting, setGreeting] = useState("Good Morning!!");
  const [modal, setModal] = useState(false);

  const openModal = () => {
    setModal(true);
  };

  const setTime = () => {
    let hour = new Date().getHours();
    if (hour >= 0 && hour < 12) {
      setGreeting("Good Morning!!");
    } else if (hour >= 12 && hour < 17) {
      setGreeting("Good Afternoon!!");
    } else {
      setGreeting("Good Evening!!");
    }
  };

  setInterval(() => {
    setTime();
  }, 2000);

  return (
    <>
      <main className='main'>
        <div className='body-container'>
          <img src={profile} alt='profile' />
          <h3>{greeting}</h3>
          <p>{new Date().toString().slice(0, 15)}</p>
          <div className='search-bar'>
            <input type='text' placeholder='Search' />
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='16'
              height='16'
              fill='currentColor'
              className='bi bi-search'
              viewBox='0 0 16 16'
            >
              <path d='M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z' />
            </svg>
          </div>
          <div>
            <NewTasks />
          </div>
          <Modal modal={modal} setModal={setModal} />
        </div>
      </main>
      <footer>
        <div className='addTasksBtn' onClick={openModal}>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='36'
            height='36'
            fill='currentColor'
            className='bi bi-plus-lg'
            viewBox='0 0 16 16'
          >
            <path
              fillRule='evenodd'
              d='M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z'
            />
          </svg>
        </div>
        <div className='footer-icons'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='36'
            height='36'
            fill='currentColor'
            className='bi bi-house-fill'
            viewBox='0 0 16 16'
          >
            <path d='M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L8 2.207l6.646 6.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.707 1.5Z' />
            <path d='m8 3.293 6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293l6-6Z' />
          </svg>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='36'
            height='36'
            fill='currentColor'
            className='bi bi-calendar-minus-fill'
            viewBox='0 0 16 16'
          >
            <path d='M4 .5a.5.5 0 0 0-1 0V1H2a2 2 0 0 0-2 2v1h16V3a2 2 0 0 0-2-2h-1V.5a.5.5 0 0 0-1 0V1H4V.5zM16 14V5H0v9a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2zM6 10h4a.5.5 0 0 1 0 1H6a.5.5 0 0 1 0-1z' />
          </svg>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='36'
            height='36'
            fill='currentColor'
            className='bi bi-bell-fill'
            viewBox='0 0 16 16'
          >
            <path d='M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zm.995-14.901a1 1 0 1 0-1.99 0A5.002 5.002 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901z' />
          </svg>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='36'
            height='36'
            fill='currentColor'
            className='bi bi-microsoft'
            viewBox='0 0 16 16'
          >
            <path d='M7.462 0H0v7.19h7.462V0zM16 0H8.538v7.19H16V0zM7.462 8.211H0V16h7.462V8.211zm8.538 0H8.538V16H16V8.211z' />
          </svg>
        </div>
      </footer>
    </>
  );
}

export default App;
