var arrNomi = ["Giorgio", "Sara"]

let utenteNome = prompt("inserisci il tuo nome")
console.log(arrNomi);




for (let i = 0; i < arrNomi.length; i++) {
    if (arrNomi[i] == utenteNome) {
        console.log("puoi entrare");
    }else{
        console.log("non puoi");
    }
    

