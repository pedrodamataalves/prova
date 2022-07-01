function calcularIMC(peso, altura){
    let imc = peso / (altura  * altura);
    if(imc > 25){
        console.log("Acima do peso");
    } else{
        console.log("Peso ideal")
    }
}


calcularIMC(60, 1.78);
calcularIMC(230, 1.98);
calcularIMC(120, 1.78);
calcularIMC(50, 1.58);