var petIncomum = 0;
var petRaro = 0;
var petEpico = 0;

for (var i = 0; i < 1100; i++) {
    var random = Math.random(); // rng dos pets

    if (random < 0.9) { // 90% petIncomum
        petIncomum++;
    } else if (random < 0.99) { // 10% petRaro
        petRaro++;
    } else { // 0.01% de chance para petEpico
        petEpico++;
    }
}

console.log("Total de petIncomum: " + petIncomum);
console.log("Total de petRaro: " + petRaro);
console.log("Total de petEpico: " + petEpico);