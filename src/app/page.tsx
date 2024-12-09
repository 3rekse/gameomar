import React from 'react';
import HexagonCanvas from './components/HexagonCanvas';

const Home: React.FC = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', textAlign: 'center' }}>
      <div >
      <h1 style={{ fontFamily: 'Mountains of Christmas, cursive' }}>GAME OMAR Buone Vacanze 2024 dall' I.T.I "Giuseppe Omar" Novara</h1>
      <HexagonCanvas />
      </div>
    </div>
  );
};   
//
export default Home;