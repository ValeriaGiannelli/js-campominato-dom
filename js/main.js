// Consegna
// Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe.
// Attenzione: nella stessa cella può essere posizionata al massimo una bomba, perciò nell’array delle bombe non potranno esserci due numeri uguali.
// In seguito l’utente clicca su una cella: se il numero è presente nella lista dei numeri generati - abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina.
// Altrimenti la cella cliccata si colora di azzurro e l’utente può continuare a cliccare sulle altre celle.
// La partita termina quando il giocatore clicca su una bomba o quando raggiunge il numero massimo possibile di numeri consentiti (ovvero quando ha rivelato tutte le celle che non sono bombe).
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha cliccato su una cella che non era una bomba.


/****************************************/

// AL CLICK DEL BOTTONE FACCIO COMPARIRE LA GRIGLIA


// prendo il bottone
const btn = document.querySelector(".start_game");

// al click del bottone aggiungo una classe alla griglia che la farà comparire

btn.addEventListener("click", 
    function(){

        // CREO L'ARRAY DEI NUMERI CASUALI

        // Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe.

        // creo un array vuoto
        const arrayBombs = [];

        // inserisco in questo array i numeri casuali

        // devo creare 16 numeri casuali, quindi:
        while (arrayBombs.length < 16){ // continua finché il mio array non è di 16 numeri
            // creo un numero randomico
            let randomNum = generateRandomNum(1, 100);
            // se questo numero non è dentro l'array -> lo inserisco con push
            if(!arrayBombs.includes(randomNum)){
                arrayBombs.push(randomNum);
            }

        } 

        console.log(arrayBombs);  


        // CREO LA GRIGLIA DINAMICA

        // prendo l'elemento nella quale dovrà comparire
        const container = document.querySelector(".grid");
        // console.log(container);

        // creo la griglia interna andando a creare un elemento per ogni spazio che ho (in questo caso 10*10 = 100)
        for(i = 1; i <= 100; i++){

            // creo l'elemento con la funzione
            let cell = createElemntWithClass("div", "box")

            // inserisco che ogni cella abbia il suo numero
            cell.append(i);

            // aggiungo un click ad ogni elemento se la cella che mi clicca ha lo stesso valore di un numero contenuto nell'array number allora bomba -> altrimenti continua
            cell.addEventListener("click",
                function(){

                    for(j = 0; j < arrayBombs.length; j++){

                        if(parseInt(cell.innerText) === arrayBombs[j]){ //se il numero è presente nella lista dei numeri generati - abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina.
                            console.log("il numero della cella è:", parseInt(cell.innerText));
                            console.log("il numero della bomba è:", arrayBombs[j]);
                            cell.classList.add("bomb");
                        } else { // Altrimenti la cella cliccata si colora di azzurro e l’utente può continuare a cliccare sulle altre celle.
                            cell.classList.add("safe");
                        }
                    }
                

                    // Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha cliccato su una cella che non era una bomba.

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