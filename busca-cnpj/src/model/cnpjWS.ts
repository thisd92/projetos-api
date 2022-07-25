export type CNPJWS = {
    cnpj_raiz: string;
    razao_social: string,
    natureza_juridica: {
        id: number,
        descricao: string,
    },
    socios: [
        {
            nome: string,
            tipo: string,   
        }
    ],
    simples: string,
    estabelecimento: {
        cnpj: string,
        atividades_secundarias: [
            {
                id: number,
                subclasse: string,
                descricao: string,
            }
        ],
        tipo: string,
        nome_fantasia: string,
        situacao_cadastral: string,
        tipo_logradouro: string,
        logradouro: string,
        numero: string,
        bairro: string,
        ddd1: string,
        telefone1: string,
        email: string,
        data_inicio_atividade: string,
        atividade_principal: {
            id: number,
            secao: string,
            subclasse: string,
            descricao: string,
        },
        pais: {
            nome: string,
        },
        estado: {
            nome: string,
        },
        cidade: {
            nome: string,
        }
    },
}
