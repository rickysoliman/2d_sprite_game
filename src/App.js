import React from 'react';
import './styles.css';
import Sprite from './components/sprite/sprite.js';
import spriteUrls from './spriteUrls';

export default function App() {
  return (
    <div className="zone-container">
      <Sprite image={spriteUrls.m1} data={{
        x: 0,
        y: 0,
        w: 32,
        h: 32
      }}/>
    </div>
  );
}
