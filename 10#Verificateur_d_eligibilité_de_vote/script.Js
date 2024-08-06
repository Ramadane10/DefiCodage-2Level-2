const AGE_MINIMUM_VOTE= 18
let age= 10
let anneeAvantEligible
if (age >= 18 ){
    console.log('Félicitations vous êtes éligible au vote.')
}else {
    anneeAvantEligible= AGE_MINIMUM_VOTE - age
    console.log('Désolé vous n\'êtes pas éligible à ce vote, vous le serez dans ', + anneeAvantEligible + ' ans.' )
}