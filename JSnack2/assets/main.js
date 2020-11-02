// JSnack2: Creare un array di nomi e chiedere all'utente due numeri.
// Creare un nuovo array con i valori che si trovano in una posizione compresa tra i due numeri inseriti dall'utente.

var names = [ "Marco", "Anna", "Stefano", "Paolo", "Sofia", "Lorenzo", "Marta", "Sara" ];
var new_names = [];

do{
    var num_1 = parseInt(prompt("Inserisci il primo numero"));
    var num_2 = parseInt(prompt("Inserisci il secondo numero"));
} while ( (num_1 < 0 || num_1 >= names.length) || (num_2 < 0 || num_2 >= names.length) || ( isNaN(num_1) || isNaN(num_2))  )

if (num_1 < num_2){
    var min = num_1;
    var max = num_2;
} else if (num_1 > num_2){
    var min = num_2;
    var max = num_1;
} else {
    var min = num_1;
    var max = num_2;
}

console.log("min = " + min + " max = " + max);

for (var i = min; i <= max; i++) {
    console.log("Faccio push del elementi in posizione " + i);
    new_names.push(names[i]);
}

console.log(new_names);
