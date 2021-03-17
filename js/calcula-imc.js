
let titulo = document.querySelector(".titulo");


//pegando todos os pacientes da tabela
let pacientes = document.querySelectorAll(".paciente");

//loop para percorrer a lista de pacientes
for(let i = 0; i < pacientes.length; i++){
    
    //acessando o array de pacientes e cada posição e colocando em uma variável
    let paciente = pacientes[i];

    //selecionando o elemento com o peso e pegando seu valor
    let tdPeso = paciente.querySelector(".info-peso");
    let peso = tdPeso.textContent;

    //selecionando o elemento com a altura e pegando seu valor
    let tdAltura = paciente.querySelector(".info-altura");
    let altura = tdAltura.textContent;

    //selecionando o elemento imc
    let tdImc = paciente.querySelector(".info-imc");

    let pesoValido = validaPeso(peso);
    let alturaValida = validaAltura(altura);

    //condição para validar a variavel peso
    if(!pesoValido){
        pesoValido = false;
        tdImc.textContent = "Peso inválido!";
        paciente.classList.add("paciente-invalido");//manipulando objeto e colocando estilo
    }

    //condição para validar a variavel peso
    if (!alturaValida){
        alturaraValida = false;
        tdImc.textContent = "Altura inválida!";
        paciente.classList.add("paciente-invalido");
    }

    //condição para verificar se as variáveis são válidas e calculando imc e colocando os valores na tabela
    if(pesoValido && alturaValida){
        let imc = calculaImc(peso, altura);
        tdImc.textContent = imc;
    }

}

function validaAltura(altura){
    if(altura >=0 && altura <= 3.0){
        return true;
    }else{
        return false;
    }
}

function validaPeso(peso){
    if(peso >= 0 && peso < 1000){
        return true;
    }else{
        return false;
    }
}


function calculaImc(peso,altura){
    let imc = 0;
    imc = peso / (altura * altura);
    return imc.toFixed(2);
}



