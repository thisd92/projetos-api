import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BASE_URL } from '../utils/request';
import { CEP } from '../models/CEP';
import Button from './Button';

const Search = () => {

    const [cep, setCep] = useState('');
    const [cepConsulta, setCepConsulta] = useState<CEP>();

    useEffect(() => {
    }, [cepConsulta])


    const getCEP = (e: any) => {
        setCep(e.target.value);
    };

    const checkCEP = () => {
        console.log(cepConsulta)
        axios({
            method: "get",
            baseURL: `${BASE_URL}`,
            url: `/${cep}/json/`,
        })
            .then(resp => {
                setCepConsulta(resp.data);
            });
    }

    return (
        <div className='container'>
            <div className='form-container'>
                <form onSubmit={e => e.preventDefault()} action="">
                    <input placeholder='Digite o CEP' onBlur={getCEP} type="text" />
                    <Button checkCEP={checkCEP} />
                </form>
            </div>
            <div className='cep-list'>
                <ul key={cepConsulta?.cep}>
                    <li>CEP: {cepConsulta?.cep}</li>
                    <li>Logradouro: {cepConsulta?.logradouro}</li>
                    <li>Complemento: {cepConsulta?.complemento}</li>
                    <li>Bairro: {cepConsulta?.bairro}</li>
                    <li>Localidade: {cepConsulta?.localidade}</li>
                    <li>UF: {cepConsulta?.uf}</li>
                    <li>IBGE: {cepConsulta?.ibge}</li>
                    <li>GIA: {cepConsulta?.gia}</li>
                    <li>DDD: {cepConsulta?.ddd}</li>
                    <li>SIAFI: {cepConsulta?.siafi}</li>
                </ul>
            </div>
        </div>

    )
}


export default Search;