var clientes = document.querySelector('.tabela-clientes');

clientes.addEventListener('click', function(event){
    var elementoClicado = event.target;
    
    if(elementoClicado.classList.contains("bt-excluir")){
        elementoClicado.parentNode.remove();
    }
    
})

