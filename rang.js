'use strict'
const iniciarrange = (idrange) =>{
    const atualizarValor = () => document.getElementById(`valor-${idrange}`).textContent = document.getElementById(idrange).value;
    document.getElementById(idrange).addEventListener('input', atualizarValor);

}


export{
    iniciarrange
}