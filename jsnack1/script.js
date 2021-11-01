// Jsnack 1 chiedere all'utente due numeri il computer valuta qual'è maggiore dei due.

// Chiedere all'utente i numeri con il prompt

let numUtente1 = prompt("Inserisci il primo numero")

let numUtente2 = prompt("Inserisci il secondo numero")

// Confrontare i numeri e stampare quello maggiore
if (numUtente1 > numUtente2) {
    console.log("Il primo numero è maggiore al secondo", numUtente1);
}
else if (numUtente1 < numUtente2) {
    console.log("Il secondo numero è maggiore al primo", numUtente2);
}
else {
    console.log("Inserisci due numeri non uguali",numUtente1, numUtente2);
}