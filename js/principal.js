var adicionar = document.querySelector(".btAdicionar")
adicionar.addEventListener('click',function(event){
    
    event.preventDefault()
    
    var form = document.querySelector('.form-adiciona');

    var cliente = obterDadosCliente(form);

    var trCliente = montarTr(cliente);

    var erros = validarCliente(cliente);

    if(erros.length > 0){
        exibeMensagensErro(erros);
        return;
    }
    
    adicionaClienteNaTabela(cliente);

    form.reset();
    var mensagensErro = document.querySelector(".erros");
    mensagensErro.innerHTML = "";
    
});


