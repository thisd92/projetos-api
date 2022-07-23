function Button({ checkCEP }:{checkCEP: Function}){
    return(
        <button className="btnCheck" onClick={() => checkCEP()}>Buscar CEP</button>
    )
}

export default Button;