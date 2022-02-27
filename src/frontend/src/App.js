import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { getAllBooks } from './api/index';
import TopNav from './components/TopNav';


function App() {
  const [scene, setScene] = useState('home');
  const [books, setBooks] = useState([]);
  const [isReady, setIsReady] = useState(false);

  useEffect(async () => {
    const booksApiJson = await getAllBooks();
    setBooks(booksApiJson);
    setIsReady(true);
  }, []);

  const changeScene = (newScene) => {
    setScene(newScene);
  };

  return (
    <>
    
      {isReady ? (
        <div className="App">
          <TopNav setScene={changeScene} />
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Edit <code>src/App.js</code> and save to reload.
            </p>
            <p>
              scene={scene}
            </p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
          </header>
          <div>
            Andrew response div books json
          </div>
        </div>

        ) : (
          <div>loading</div>
        )
      }
    </>
    
  );
}

export default App;
