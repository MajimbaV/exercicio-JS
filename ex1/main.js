inputCatetoOposto = document.getElementById("cateto-oposto")
inputCatetoAdjacente = document.getElementById("cateto-adjacente")
btnCalcular = document.getElementById("btn-calcular")

function calcHipotenusa(){
    catetoOposto = parseFloat(inputCatetoOposto.value)
    catetoAdjacente = parseFloat(inputCatetoAdjacente.value)

    if(isNaN(catetoOposto) || isNaN(catetoAdjacente)){
        return console.log("Preencha os campos com números inteiros!")
    }else if(catetoOposto < 0 || catetoAdjacente < 0){
        return console.log("Os valores devem ser um número positivo!")
    }else{
        hipotenusa = (Math.sqrt((catetoOposto**2) + (catetoAdjacente**2)))
        hipotenusa = +hipotenusa.toFixed(2) 

        return console.log(`A hipotenusa deste triângulo tem cumprimento de aproxidamente ${hipotenusa}m`)
    }
}

btnCalcular.addEventListener('click', calcHipotenusa)