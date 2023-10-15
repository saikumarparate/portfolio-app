import React from 'react';
import './App.css';
import { TemplateLean } from '@allamgr/portafolio'
import jsonData from './components/data.json';

function App() {

  let json = JSON.stringify(jsonData);
  return (
    <main>
      <div className="App container">
        <TemplateLean json={json} />
      </div>
    </main>
  );
}

export default App;
