import React, { useState } from 'react';
import './App.css';
import CNPJWS from './components/CNPJ-WS';
import CNPJSintegra from './components/CNPJ-Sintegra';
import Footer from './components/Footer';

function App() {

  const [topic, setTopic] = useState(0);

  return (
    <>
      <main className='new'>
        <button onClick={() => setTopic(1)}>WS</button>
        <button onClick={() => setTopic(2)}>Sintegra</button>
        {topic === 1 && <CNPJWS />}
        {topic === 2 && <CNPJSintegra />}
      </main>
      <Footer />
    </>
  );
}

export default App;
