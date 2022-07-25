import { useState } from "react";
import { CNPJSintegra } from "../model/cnpjSintegra";
import { apiSintegra } from "../service/api";

const CnpjSintegra = () => {

    const [cnpj, setCNPJ] = useState('');
    const [cnpjSintegra, setCNPJSintegra] = useState<CNPJSintegra>();

    const checarCNPJ = () => {
        apiSintegra(`?token=${process.env.REACT_PUBLIC_API_CNPJ_TOKEN}&cnpj=${cnpj}&plugin=RF`)
            .then(resp => {
                setCNPJSintegra(resp.data);
            })
    }

    function getCNPJ(e: any) {
        setCNPJ(e.target.value);
        console.log(cnpj);
    }

    return (
        <div>
            <div className='form-container'>
                <form id='form-cnpj' onSubmit={e => e.preventDefault()} action="">
                    <input id='input-cep' placeholder='Digite o CNPJ' onBlur={getCNPJ} type="text" /><br />
                    <button onClick={checarCNPJ}>Buscar CNPJ Sintegra</button>
                </form>
            </div>
            <div className='cnpj-list'>
                <ul key={cnpjSintegra?.cnpj}>
                    <li><span>CNPJ:</span> {cnpjSintegra?.cnpj}</li>
                    <li><span>Razão Social:</span> {cnpjSintegra?.nome}</li>
                    <li><span>Nome Fantasia:</span> {cnpjSintegra?.fantasia}</li>
                    <li><span>E-mail:</span> {cnpjSintegra?.email}</li>
                    <li><span>Atividade Principal:</span> {cnpjSintegra?.atividade_principal_code} {cnpjSintegra?.atividade_principal_text}</li>
                    <li><span>Logradouro:</span> {cnpjSintegra?.logradouro}</li>
                    <li><span>Numero:</span> {cnpjSintegra?.numero}</li>
                    <li><span>Bairro:</span> {cnpjSintegra?.bairro}</li>
                    <li><span>Cidade:</span> {cnpjSintegra?.municipio}</li>
                    <li><span>Estado:</span> {cnpjSintegra?.uf}</li>
                    <li><span>Abertura:</span> {cnpjSintegra?.abertura}</li>
                    <li><span>Situação Cadastral:</span> {cnpjSintegra?.situacao}</li>
                </ul>
            </div>

        </div>
    )
}

export default CnpjSintegra;