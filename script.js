const readlineSync = require('readline-sync');


let victories = parseInt(readlineSync.question('\nDigite a Quantidade de Vitorias: '));
let defeats = parseInt(readlineSync.question('\nDigite a quantidade de Derrotas: '));
let rankedBalance = '';
let level = "";

function CalculateRankedBalance(victories, defeats) {
    rankedBalance = victories - defeats;
    return rankedBalance;
};


CalculateRankedBalance(victories, defeats);
switch (true) {
    case (rankedBalance < 0): level = "Indefinido"; break; 
    case ((rankedBalance > 0) && (rankedBalance < 10)): level = "Ferro"; break;
    case ((rankedBalance > 11) && (rankedBalance < 20)): level = "Bronze"; break;
    case ((rankedBalance > 21) && (rankedBalance < 50)): level = "Prata"; break;
    case ((rankedBalance > 51) && (rankedBalance < 80)): level = "Ouro"; break;
    case ((rankedBalance > 81) && (rankedBalance < 90)): level = "Diamante"; break;
    case ((rankedBalance > 91) && (rankedBalance < 100)): level = "Lendário"; break;
    case (rankedBalance > 100): level = "Imortal"; break;
}

console.log(`\n seu heroi tem um saldo de ${rankedBalance}, e é nivel "${level}".`)