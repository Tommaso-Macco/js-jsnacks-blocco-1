// L'utente inserisce due parole il computer stampa prima la più corta e poi la più lunga


// Chiediamo all'utente le parole
const parola1 = prompt("Inserisci la prima parola.");
const parola2 = prompt("Inserisci la seconda parola.");

console.log("La prima parola è: " + parola1);
console.log("La seconda parola è: " + parola2);

// confrontiamo le parole
if (parola1.length == parola2.length) {
    console.log("Le due parole hanno la stessa lunghezza");
} else if (parola1.length > parola2.length) {
    console.log("la parola più corta è", parola2, "la parola più lunga è", parola1);
} else  {
    console.log("la parola più corta è", parola1, "la parola più lunga è", parola2);
}

