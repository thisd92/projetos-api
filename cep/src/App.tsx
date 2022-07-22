import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BASE_URL } from './utils/request';
import { CEP } from './models/CEP';
import api from './services/api';

function App() {
  
  const startCEP = (e: any) => e.target.value;
  const [cep, setCep] = useState('');
  const [cepConsulta, setCepConsulta] = useState<CEP[]>([]);

  // useEffect(() => {
  //   api
  //    .get(`/${cep}/json`)
  //    .then((resp) => {
  //      setCepConsulta(resp.data);
  //    });
  // })


  function getCEP(){
    axios({
        method: "get",
        baseURL: `${BASE_URL}`,
        url: `/${cepConsulta}/json/`,
    })
      .then(resp => {
          console.log(resp.data.content)
        });
    };

    const checkCEP = (e: any) => {
      const cep = e.target.value;
      fetch(`${BASE_URL}/${cep}/json/`)
        .then(resp => resp.json())
        .then(data => {
          console.log(data);
        })
    }

    

  return (
    <>
      <form action="">
        <input placeholder='Digite o CEP' onChange={checkCEP} onBlur={getCEP} type="text" />
        <button onClick={getCEP}>Buscar CEP</button>
      </form>
      <div>
        {cepConsulta.map(cep => {
          return(
            <ul key={cep.cep}>
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