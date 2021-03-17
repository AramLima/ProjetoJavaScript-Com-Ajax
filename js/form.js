let botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function(event) {
    event.preventDefault();
    var form = document.querySelector("#form-adiciona");
    var paciente = obtemPacienteDoFormulario(form);
    var erros = validaPaciente(paciente);
    if (erros.length > 0) {
        exibeMensagensDeErro(erros);
        return;
    }

    adicionaPacienteNaTabela(paciente);

    form.reset();    
    var mensagensErro = document.querySelector("#mensagens-erro");
    mensagensErro.innerHTML = "";
});

function adicionaPacienteNaTabela(paciente) {
    var pacienteTr = montaTr(paciente);
    var tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTr);
}

function exibeMensagemDeErros(erros){
    let ul = document.querySelector("#mensagem-erro");
    ul.innerHTML = "";
    erros.forEach(erro => {
        let li = document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li);
    });
}

function obtemPacienteDoFormulario(form){
    
    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value)
    }

    return paciente;

}

function montaTr(paciente){
    //crinado uma tag(tr) no HTML(DOM)
    let pacienteTr = document.createElement("tr");
    pacienteTr.classList.add('paciente');
    
    //colocando um elemento dentro do outro como tag filha
    pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
    pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
    pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
    pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
    pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));

     return pacienteTr;
}

function montaTd(dado,classe){
    let td = document.createElement("td");
    td.textContent = dado;
    td.classList.add(classe);

    return td;
}

function validaPaciente(paciente){
    
    let erros = [];

    if(paciente.nome.length == 0){
        erros.push("Preencha o campo nome");
    }

    if(!validaPeso(paciente.peso) || (paciente.peso.length == 0)){
        erros.push("Peso inválido ou campo vazio");
    }

    if(!validaAltura(paciente.altura) || (paciente.altura.length == 0)){
        erros.push("Altura inválida ou campo vazio");
    }

    if(paciente.gordura.length == 0){
        erros.push("Preencha o campo gordura");
    }

    return erros;
}

