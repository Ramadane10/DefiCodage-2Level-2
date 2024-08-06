const prixOriginale= 200
const poucentageReduction= 10
const montantReduction= prixOriginale * poucentageReduction/100
const prixApresReduction= prixOriginale - montantReduction
console.log('Le prix originale est : ' , + prixOriginale + ' GNF' +
    '\nLe montant de la réduction est : ' , + montantReduction + ' GNF' +
    '\nLe prix après la réduction est : ' , + prixApresReduction + ' GNF'
)