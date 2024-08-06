let poids= 70
let taille= 1.75
let imc= poids / (taille * taille)
if (imc < 18.5){
    console.log('Sous-poids')
}else if (imc >= 18.5 && imc < 25){
    console.log('Poids normal')
}else {
    console.log('Surpoids')
}