import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { getAllBooks } from './api/index';
import TopNav from './components/TopNav';
import CategoryHome from './components/CategoryHome';
import DefaultReactHeader from './components/DefaultReactHeader';

function App() {
  const [scene, setScene] = useState('home');
  const [books, setBooks] = useState([]);
  const [isReady, setIsReady] = useState(false);

  useEffect(async () => {
    // TODO: place in try catch, and change to kent dodds style of async useeffect
    const booksApiJson = await getAllBooks();
    console.log('andrew books json: ', booksApiJson);
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
          <DefaultReactHeader />
          {scene === 'quotes' && <div> quotes </div>}
          {scene !== 'quotes' && <CategoryHome categoryName={scene} categoryData={books} />}
        </div>
        ) : (
          <div>loading</div>
        )
      }
    </>
  );
}

export default App;
