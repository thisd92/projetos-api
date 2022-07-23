function Button({ checkCEP }:{checkCEP: Function}){
    return(
        <button onClick={() => checkCEP()}>Buscar CEP</button>
    )
}

export default Button;