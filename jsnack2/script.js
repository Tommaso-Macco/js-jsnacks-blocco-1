// L'utente inserisce due parole il computer stampa prima la più corta e poi la più lunga


// Chiediamo all'utente le parole
let parola1 = prompt ("Inserisci la prima parola")
let parola2 = prompt ("Inserisci la seconda parola")

// COnfrontiamo le parole

if (parola1.length > parola2.length) {
    console.log("la parola più corta è:", parola2 "e la più lunga è:", parola1);
}
else if (parola1.length < parola2.length) {
    console.log("la parola più corta è:", parola1 "e la più lunga è:", parola2);
}
else {
    console.log("scrivi due parole non lunghe uguali!");
}

