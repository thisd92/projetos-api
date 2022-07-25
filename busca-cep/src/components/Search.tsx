import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BASE_URL } from '../utils/request';
import { CEP } from '../models/CEP';
import Button from './Button';
import Logo from './Logo'

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
            <Logo />
            <div className='form-container'>
                <form id='form-cep' onSubmit={e => e.preventDefault()} action="">
                    <input id='input-cep' placeholder='Digite o CEP' onBlur={getCEP} type="text" />
                    <Button checkCEP={checkCEP} />
                </form>
            </div>
            <div className='cep-list'>
                <ul key={cepConsulta?.cep}>
                    <li><span>CEP:</span> {cepConsulta?.cep}</li>
                    <li><span>Logradouro:</span> {cepConsulta?.logradouro}</li>
                    <li><span>Complemento:</span> {cepConsulta?.complemento}</li>
                    <li><span>Bairro:</span> {cepConsulta?.bairro}</li>
                    <li><span>Localidade:</span> {cepConsulta?.localidade}</li>
                    <li><span>UF:</span> {cepConsulta?.uf}</li>
                    <li><span>IBGE:</span> {cepConsulta?.ibge}</li>
                    <li><span>GIA:</span> {cepConsulta?.gia}</li>
                    <li><span>DDD:</span> {cepConsulta?.ddd}</li>
                    <li><span>SIAFI:</span> {cepConsulta?.siafi}</li>
                </ul>
            </div>
        </div>

    )
}


export default Search;