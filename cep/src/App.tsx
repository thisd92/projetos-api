import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BASE_URL } from './utils/request';
import { CEP } from './models/CEP';
import api from './services/api';

function App() {
  
  const startCEP = '90880380';
  const [cep, setCep] = useState(startCEP);
  const [cepConsulta, setCepConsulta] = useState<CEP[]>([]);

  //  useEffect(() => {
  //    api
  //     .get(`/${cep}/json`)
  //     .then((resp) => {
  //       setCepConsulta(resp.data);
  //     });
  //  })

  
    function getCEP(){
    //  axios({
    //    method: "get",
    //    url: `/${cepConsulta}/json`,
    //    baseURL: `${BASE_URL}`
    api
      .get(`/${cepConsulta}/json`)
      .then(resp => {
          setCepConsulta(resp.data.content)
        });
    };

  return (
    <>
      <form action="">
        <input placeholder='Digite o CEP' onChange={e => setCep(e.target.value)} type="text" />
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