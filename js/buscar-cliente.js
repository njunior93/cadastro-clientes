var botaoBuscar = document.querySelector('.btBuscar')

botaoBuscar.addEventListener("click", function(){
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "http://localhost:3000/clientes")

    xhr.addEventListener("load", function(){
        if(xhr.status == 200){
            var resposta = xhr.responseText;
            var clientes = JSON.parse(resposta)
            
            clientes.forEach(function(cliente){
                adicionaClienteNaTabela(cliente)
            });
        } else {
            var erro = "ERRO" + xhr.status;
            window.alert("OI")
            
        }  

    })

    xhr.send();
    
})