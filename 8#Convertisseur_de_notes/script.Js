let note= 10
if (note >= 90 && note <= 100){
    console.log('Excellent')
}else if (note >= 80 && note <= 89){
    console.log('Très bien')
}else if (note >= 70 && note <= 79){
    console.log('Bien')
}else if (note >= 60 && note <= 69){
    console.log('Assez bien')
}else if (note < 50){
    console.log('Insuffisant')
}else {
    console.log('Veuillez entrer une valeur entre 0 et 100.')
}