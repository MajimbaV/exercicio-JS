inputRaioEsfera = document.getElementById("input-raio-esfera")
btnCalcular = document.getElementById("btn-calcular")

function calcVolume(){
    raioEsfera = parseFloat(inputRaioEsfera.value)

    if(isNaN(raioEsfera)){
        return console.log("Preencha o campo com números inteiros!")
    }else if(raioEsfera < 0){
        return console.log("O raio deve ser um número positivo!")
    }else{
        
        volume = (4 * 3.14 * (raioEsfera**3)/3)
        volume = +volume.toFixed(2)

        return console.log(`O volume de uma esfera com raio ${raioEsfera}m é aproximadamente: ${volume}m`)
    }
}

btnCalcular.addEventListener('click', calcVolume)
