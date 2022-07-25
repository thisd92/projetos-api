import React, { useState } from 'react';
import './App.css';
import CNPJWS from './components/CNPJ-WS';
import CNPJSintegra from './components/CNPJ-Sintegra';

function App() {
  
  const [topic, setTopic] = useState(0);
  
  return (
    <div>
      <button onClick={() => setTopic(1)}>WS</button>
      <button onClick={() => setTopic(2)}>Sintegra</button>
      {topic === 1 && <CNPJWS />}
      {topic === 2 && <CNPJSintegra />}
    </div>
  );
}

export default App;
