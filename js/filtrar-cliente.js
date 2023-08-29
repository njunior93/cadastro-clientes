var filtro = document.querySelector(".filtrar-cliente");

filtro.addEventListener("input", function(){

    var clientes = document.querySelectorAll('.cliente');

    if(this.value.length > 0){
      
        for (var i in clientes){
            var cliente = clientes[i]
            var tdNome = cliente.querySelector('.info-nome');
            var nome = tdNome.textContent;
            var expressao = new RegExp(this.value, "i");

            if(expressao.test(nome)){
                cliente.classList.remove("invisivel")
            }else{
                cliente.classList.add("invisivel");
            }
        }
    }else{
        for (var i in clientes){
            clientes[i].classList.remove("invisivel");
        }
    }
})