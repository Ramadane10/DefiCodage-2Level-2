const montantFacture= 100
const pourcentagePourboire= 20
const montantPourboire= montantFacture * pourcentagePourboire/100
const totalAPayer= montantFacture + montantPourboire
console.log('Montant de la facture : ' + montantFacture + ' £' +
    '\nPourcentage de pourboire : ' + pourcentagePourboire + ' %' +
    '\nMontant de pourboire : ' + montantPourboire  + ' £' +
    '\nTotal à payer : ' + totalAPayer + ' £' 
)
