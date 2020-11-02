// JSnack1: Creare un array di oggetti: ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
// Stampare a schermo la bici con peso minore.

var bikes =[
    {
        nome: "lightest",
        peso: 2
    },
    {
        nome: "light",
        peso: 4
    },
    {
        nome: "heavy",
        peso: 5
    },
    {
        nome: "heavier",
        peso: 7
    },
    {
        nome: "one",
        peso: 1
    },
    {
        nome: "bike05",
        peso: 0.5
    },
    {
        nome: "cento",
        peso: 100
    },
    {
        nome: "zero",
        peso: 0
    }
];

for (var i = 0; i < bikes.length; i++) {

    var index = 0 ;

    for(var bike_attr in bikes[i]){

        if(bike_attr == "peso"){

            console.log("i = " + i);
            console.log(bike_attr + " = " + bikes[i][bike_attr]);
            // Se è la prima bici del array mi salvo il peso e l'indice
            if(i == 0){

                var min_wheight = bikes[i][bike_attr];
                index = i;
                console.log("min wheight " + min_wheight);

            } else {
            // Controllo se il peso della bici attuale è minore di quello attualmente salvato come minore
            // Se pesa di meno mi salvo l'indice della bici e il peso come valore di confronto
                console.log("min wheight " + min_wheight);
                if (bikes[i][bike_attr] < min_wheight){
                    min_wheight = bikes[i][bike_attr];
                    index = i;
                }
            }
        }

    }
}

console.log("La bici più leggera è " + bikes[index].nome + " che pesa " + bikes[index].peso + " Kg");
