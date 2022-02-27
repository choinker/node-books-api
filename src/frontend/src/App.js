import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { getAllBooks } from './api/index';
import TopNav from './components/TopNav';


function App() {

  const [books, setBooks] = useState([]);
  const [isReady, setIsReady] = useState(false);

  useEffect(async () => {
    const booksApiJson = await getAllBooks();
    debugger;
    setBooks(booksApiJson);
    setIsReady(true);
  }, []);

  return (
    <>
    
      {isReady ? (
        <div className="App">
          <TopNav />
          <header className="App-header">
            <TopNav />
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Edit <code>src/App.js</code> and save to reload.
            </p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
            <div>
              Andrew response div books json
              {books.map((book) => {
                <div>{book}</div>
              })}
            </div>
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
