import React, { useState } from 'react';
import axios from 'axios';
import { BASE_URL } from './utils/request';
import { CEP } from './models/CEP';

function App() {
  
  const [ceps, setCep] = useState([]);
  
  function getCEP(){
    axios.get(`${BASE_URL}/${ceps}/json`)
      .then(resp => {
        setCep(resp.data.content)
      });
  };

  return (
    <>
      <form action="">
        <input onChange={cep => setCep(cep)} type="text" />
        <button onClick={getCEP}>Buscar CEP</button>
      </form>
      <div>
        {ceps.map(cep => {
          return(
            <ul>
              <li>CEP: {cep.cep}</li>
              <li>Logradouro: {cep.logradouro}</li>
              <li>Complemento: {cep.complemento}</li>
              <li>Bairro: {cep.bairro}</li>
              <li>Localidade: {cep.localidade}</li>
              <li>UF: {cep.uf}</li>
              <li>IBGE: {cep.ibge}</li>
              <li>GIA: {cep.gia}</li>
              <li>DDD: {cep.ddd}</li>
              <li>SIAFI: {cep.siafi}</li>
            </ul>
          )
        })}
      </div>
    </>  
  );
};

export default App;
