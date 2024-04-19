import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { MainRoutes } from './routes/MainRoutes';
import { Aside } from './components/Aside';
import { Header } from './components/Header';
import useAside from './hooks/useAside';


function App() {
  const {isOpen, toggleAside} = useAside();
  return (
    <div style={{height:'100vh', display: 'flex', flexDirection: 'column'}}>
      <BrowserRouter>
        <Header menuFunction={toggleAside}/>
        <div style={{display: 'flex', flex: 1 }}>
          {isOpen && 
            <Aside />
          }
          <MainRoutes />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
