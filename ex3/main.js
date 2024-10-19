inputAcertos = document.getElementById("input-acertos")
inputErros = document.getElementById("input-erros")
btnCalcular = document.getElementById("btn-calcular")

function calcPontos(){
    nAcertos = parseInt(inputAcertos.value)
    nErros = parseInt(inputErros.value)

    if(isNaN(nAcertos) || isNaN(nErros)){
        return console.log("Preencha os campos com números inteiros!")
    }else if(nAcertos < 0 || nErros < 0){
        return console.log("Os valores devem ser um número inteiro positivo!")
    }else{
        pontos = (nAcertos*5) - (nErros*3)
        
        if(pontos < 0){
            pontos = 0
        }

        return console.log(`O candidato alcançou ${pontos} pontos!`)
    }
}


btnCalcular.addEventListener('click', calcPontos)
