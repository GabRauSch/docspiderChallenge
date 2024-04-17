import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { MainRoutes } from './routes/MainRoutes';
import { Aside } from './components/Aside';
import { Header } from './components/Header';


function App() {
  return (
    <div style={{height:'100vh', display: 'flex', flexDirection: 'column'}}>
      <BrowserRouter>
        <Header />
        <div style={{display: 'flex', flex: 1 }}>
          <Aside />
          <MainRoutes />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
