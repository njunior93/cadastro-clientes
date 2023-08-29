function obterDadosCliente(form){

    var cliente = {
        nome: form.nome.value,
        cpf: form.cpf.value,
        ano: form.ano.value,
        sexo: form.sexo.value
    }

    return cliente; 
}

function montarTr(dado){
    var tr = document.createElement('tr');
    tr.classList.add("cliente");


    var tdNome = montarTd(dado.nome, "info-nome");
    var tdCPF = montarTd(dado.cpf, "info-cpf");
    var tdAno = montarTd(dado.ano, "info-ano");
    var tdSexo =  montarTd(dado.sexo, "info-sexo");
    var tdIdade = montarTd(calcularIdade(dado.ano), "info-idade")
    var tdBotao = montarTd("Excluir","bt-excluir")


    tr.appendChild(tdNome);
    tr.appendChild(tdCPF);
    tr.appendChild(tdAno);
    tr.appendChild(tdSexo);
    tr.appendChild(tdIdade);
    tr.appendChild(tdBotao)

    return tr;

}

function montarTd(dado,classe){
    var td = document.createElement("td");
    td.textContent = dado;
    td.classList.add(classe);

    return td;
}

function adicionaClienteNaTabela(cliente){
    var clienteTr = montarTr(cliente);
    var tabela = document.querySelector('.tabela-clientes');
    tabela.appendChild(clienteTr);

}


function calcularIdade(ano){
    var dataAtual = new Date();
    var anoAtual = Number(dataAtual.getFullYear());
    var idade = anoAtual - (ano);
    
    return idade;
}

function validarCPFrepetido(cpf){
    var erro = false;
    var clientes = document.querySelectorAll('.cliente');
    for (var i=0; i < clientes.length; i++){
        cpf_repetido = clientes[i].querySelector(".info-cpf")
        if (cpf == cpf_repetido.textContent){
            erro = true;
        }
    }

    return erro;

}

function validarCPF(cpf) {	
	cpf = cpf.replace(/[^\d]+/g,'');	
	if(cpf == '') return false;	
	if (cpf.length != 11 || 
		cpf == "00000000000" || 
		cpf == "11111111111" || 
		cpf == "22222222222" || 
		cpf == "33333333333" || 
		cpf == "44444444444" || 
		cpf == "55555555555" || 
		cpf == "66666666666" || 
		cpf == "77777777777" || 
		cpf == "88888888888" || 
		cpf == "99999999999")
			return false;
	add = 0;	
	for (i=0; i < 9; i ++)		
		add += parseInt(cpf.charAt(i)) * (10 - i);	
		rev = 11 - (add % 11);	
		if (rev == 10 || rev == 11)		
			rev = 0;	
		if (rev != parseInt(cpf.charAt(9)))		
			return false;
	add = 0;	
	for (i = 0; i < 10; i ++)		
		add += parseInt(cpf.charAt(i)) * (11 - i);	
	rev = 11 - (add % 11);	
	if (rev == 10 || rev == 11)	
		rev = 0;	
	if (rev != parseInt(cpf.charAt(10)))
		return false;		
	return true;
}



function validarCliente(cliente){
    var erros = [];
    var reg = /^[a-zA-Z]*$/;

    if (cliente.nome.length == 0) {
        erros.push("Campo 'Nome' invalido")
    }

    if(reg.test(cliente.nome) == false){
        erros.push("Campo 'Nome' invalido");
    }

    if(cliente.ano.length == 0 || cliente.ano.length < 4){
        erros.push("Campo 'Ano de Nascimento' invalido")
    }

    if(validarCPF(cliente.cpf) == false){
        erros.push("Campo 'CPF' invalido")
    }

   if (validarCPFrepetido(cliente.cpf) == true){
        erros.push("CPF ja cadastrado")
    }

    return erros;
}

function exibeMensagensErro(erros){
    var ul = document.querySelector(".erros")
    ul.innerHTML = ""

    for (var i in erros){
        var li = document.createElement("li")
        li.textContent = erros[i];
        li.classList.add('erro-cliente')
        ul.appendChild(li)
    }

}