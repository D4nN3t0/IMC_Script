let altura; 
let peso;
let limites = [18.5, 24.9, 29.9, 34.9, 39.9, 40];
let textos = [
    'Abaixo do Peso', 'Peso Normal', 'Sobrepeso', 'Obesidade I', 'Obesidade II', 'Obesidade III'
];

 altura = Number(prompt('Digite Sua Altura:'));
 console.log(altura);

 peso = Number(prompt('Digite Seu Peso Corporal:'));
 console.log(peso);

 function calcularIMC(altura, peso) {
    return peso / (altura * altura);
 }

 function classificacoes (indiceMassaCorporal) {
    if (indiceMassaCorporal > limites[4]) {
        alert(textos[5])
    } else
        if (indiceMassaCorporal > limites[3]) {
            alert(textos[4])
        } else
            if (indiceMassaCorporal > limites[2]) {
                alert(textos[3])
            } else
                if (indiceMassaCorporal > limites[1]) {
                    alert(textos[2])
                } else
                    if (indiceMassaCorporal > limites[0]) {
                        alert(textos[1])
                    } else {
                        alert(textos[0])
                    }
 }

 let indiceMassaCorporal = calcularIMC(altura, peso);
 classificacoes(indiceMassaCorporal);