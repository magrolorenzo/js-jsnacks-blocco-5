// JSnack3: A partire da un array di oggetti, creare una copia dell'array
// e aggiungere ai singoli elementi dell'array una nuova proprietà "position" che contiene una lettera casuale.

var objects = [
    {
        name: "Lorenzo",
        id: 1
    },
    {
        name: "Manuela",
        id: 2
    },
    {
        name: "Alberto",
        id: 3
    },
    {
        name: "Elisa",
        id: 4
    },
    {
        name: "Anna",
        id: 5
    },
    {
        name: "Francesca",
        id: 6
    }
];

var new_obj = [];

var min_ascii = 97;
var max_ascii = 122;

for (var i = 0; i < objects.length; i++) {
    // genero la stringa con una lettera casuale estratta corrispondente ad un numero del codice ascii
    var random_letter = String.fromCharCode(getRndInteger(min_ascii, max_ascii));
    console.log(random_letter);
    new_obj.push(objects[i]);
    new_obj[i].position = random_letter;
}

console.log(new_obj);




function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}
