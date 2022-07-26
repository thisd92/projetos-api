import { useEffect, useState } from "react";
import { CNPJWS } from "../model/cnpjWS";
import { apiWS } from "../service/api";

function SearchCNPJ() {

    const [cnpj, setCNPJ] = useState('');
    const [cnpjWS, setcnpjWS] = useState<CNPJWS>();

    useEffect(() => {
    }, [cnpjWS])

    const checkCNPJ = () => {
        apiWS(`/${cnpj}`)
            .then(resp => {
                setcnpjWS(resp.data)
            });
    }
    function getCNPJ(e: any) {
        setCNPJ(e.target.value);
        console.log(cnpj);
    }

    return (
        <div className='container'>
            <div className='form-container'>
                <form id='form-cnpj' onSubmit={e => e.preventDefault()} action="">
                    <input id='input-cep' placeholder='Digite o CNPJ' onBlur={getCNPJ} type="text" />
                    <button className="btnSearch" onClick={checkCNPJ}>Buscar CNPJ</button>
                </form>
            </div>
            <div className='cnpj-list'>
                <ul>
                    <li><span>CNPJ:</span> {cnpjWS?.estabelecimento.cnpj.replace(/^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, "$1.$2.$3/$4-$5")}</li>
                    <li><span>Razão Social:</span> {cnpjWS?.razao_social}</li>
                    <li><span>Nome Fantasia:</span> {cnpjWS?.estabelecimento.nome_fantasia}</li>
                    <li><span>Natureza Jurídica:</span> {cnpjWS?.natureza_juridica.id} - {cnpjWS?.natureza_juridica.descricao}</li>
                    <li><span>Data Abertura:</span> {cnpjWS?.estabelecimento.data_inicio_atividade.replace(/(\d{4})(-)(\d{2})(-)(\d{2})/g, "$5/$3/$1")}</li>
                    <li><span>Situação Cadastral:</span> {cnpjWS?.estabelecimento.situacao_cadastral}</li>
                    <li><span>Telefone:</span> ({cnpjWS?.estabelecimento.ddd1}) {cnpjWS?.estabelecimento.telefone1.replace(/^(\d{4})(\d{4})/, "$1-$2")}</li>
                    <li><span>E-mail:</span> {cnpjWS?.estabelecimento.email}</li>
                    <li><span>Logradouro:</span> {cnpjWS?.estabelecimento.tipo_logradouro} {cnpjWS?.estabelecimento.logradouro}</li>
                    <li><span>Numero:</span> {cnpjWS?.estabelecimento.numero}</li>
                    <li><span>Bairro:</span> {cnpjWS?.estabelecimento.bairro}</li>
                    <li><span>Cidade:</span> {cnpjWS?.estabelecimento.cidade.nome}</li>
                    <li><span>UF:</span> {cnpjWS?.estabelecimento.estado.nome}</li>
                    <li><span>Pais:</span> {cnpjWS?.estabelecimento.pais.nome}</li>
                    <li><span>Tipo:</span> {cnpjWS?.estabelecimento.tipo}</li>
                </ul>
                <ul>
                    <li><span>Atividade Principal:</span> {cnpjWS?.estabelecimento.atividade_principal.subclasse} - {cnpjWS?.estabelecimento.atividade_principal.descricao}</li>
                    {cnpjWS?.estabelecimento.atividades_secundarias.map(a => {
                        return (
                            <li><span>Atividade Secundária:</span> {a.subclasse} - {a.descricao}</li>
                        )
                    })}
                </ul>
                <ul>
                    {cnpjWS?.socios.map(s => {
                        return (
                            <li><span>Sócio:</span> {s.nome} - {s.tipo}</li>
                        )
                    })}
                </ul>
            </div>
        </div>

    )

}

export default SearchCNPJ;