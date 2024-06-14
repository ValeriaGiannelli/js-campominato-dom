// Consegna
// L’utente clicca su un bottone che genererà una griglia di gioco quadrata.
// Ogni cella ha un numero progressivo, da 1 a 100.
// Ci saranno quindi 10 caselle per ognuna delle 10 righe.
// Quando l’utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.

// BONUS LIVELLO DI DIFFICOLTA'

// // seleziona il livello di difficoltà
// let selector = document.getElementById("difficulty");
// console.log(selector);

// let levelDifficulty = selector.value;
// console.log(levelDifficulty);

// // a seconda del livello la griglia dovrà avere un diverso numero di caselle
// let numCell;

// // se livello di difficoltà 1 allora le celle sono 100
// if(levelDifficulty === "diff1"){
//     numCell = 100;
//     console.log(numCell);
// } else if(levelDifficulty === "diff2"){ // se livello di difficoltà 2 le celle sono 81
//     numCell = 81;
//     console.log(numCell);
// } else if(levelDifficulty === "diff3") { // se livello didifficoltà 3 le celle sono 49    
//     numCell = 49;
//     console.log(numCell);
// }



// CREO LA GRIGLIA DINAMICA

// // prendo l'elemento nella quale dovrà comparire
// const container = document.querySelector(".grid");
// console.log(container);

// // creo la griglia interna andando a creare un elemento per ogni spazio che ho (in questo caso 10*10 = 100)
// for(i = 1; i <= numCell; i++){

//     // creo l'elemento con la funzione
//     let cell = createElemntWithClass("div", "box")

//     // inserisco che ogni cella abbia il suo numero
//     cell.append(i);


//     // aggiungo un click ad ogni elemento
//     cell.addEventListener("click",
//         function(){
//             // aggiungo una classe alla cella selezionata
//             cell.classList.add("clicked")

//             // al click stampo in console il "testo" contenuto in ogni cella
//             console.log(cell.innerText);
//         }
//     );
//     // lo inserisco nel contenitore
//     container.append(cell);

// }

/****************************************/

// AL CLICK DEL BOTTONE FACCIO COMPARIRE LA GRIGLIA


// prendo il bottone
const btn = document.querySelector(".start_game");

// al click del bottone aggiungo una classe alla griglia che la farà comparire




btn.addEventListener("click", 
    function(){
        // BONUS LIVELLO DI DIFFICOLTA'
        // seleziona il livello di difficoltà
        let selector = document.getElementById("difficulty");
        console.log(selector);

        let levelDifficulty = selector.value;
        console.log(levelDifficulty);
        
        // a seconda del livello la griglia dovrà avere un diverso numero di caselle
        let numCell;

        // se livello di difficoltà 1 allora le celle sono 100
        if(levelDifficulty === "diff1"){
            numCell = 100;
            console.log(numCell);
        } else if(levelDifficulty === "diff2"){ // se livello di difficoltà 2 le celle sono 81
            numCell = 81;
            console.log(numCell);
        } else if(levelDifficulty === "diff3") { // se livello didifficoltà 3 le celle sono 49    
            numCell = 49;
            console.log(numCell);
        }

        // CREO LA GRIGLIA DINAMICA

        // prendo l'elemento nella quale dovrà comparire
        const container = document.querySelector(".grid");
        console.log("container iniziale: ", container);

        // cancello le cose nel container
        container.innerHTML="";

        // creo la griglia interna andando a creare un elemento per ogni spazio che ho (in questo caso 10*10 = 100)
        for(i = 1; i <= numCell; i++){

            // creo l'elemento con la funzione
            let cell = createElemntWithClass("div", "box")

            // if(numCell === 81){
            //     cell.classList.add("box_81");
            // } else if (numCell === 49) {
            //     cell.classList.add("box_49");
            // }

            // do una dimensione a seconda della grandezza
            let radix = Math.sqrt(numCell);
            
            let grandezza = 100 / radix;
            cell.style.width = `${grandezza}%`;
            cell.style.height = `${grandezza}%`;

            // inserisco che ogni cella abbia il suo numero
            cell.append(i);



            // aggiungo un click ad ogni elemento
            cell.addEventListener("click",
                function(){
                    // aggiungo una classe alla cella selezionata
                    cell.classList.add("clicked")

                    // al click stampo in console il "testo" contenuto in ogni cella
                    console.log(cell.innerText);
                }
            );
            // lo inserisco nel contenitore
            container.append(cell);

        }

        container.classList.add("show");
    }
);

/****************************************/