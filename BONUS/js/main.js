// Consegna
// L’utente clicca su un bottone che genererà una griglia di gioco quadrata.
// Ogni cella ha un numero progressivo, da 1 a 100.
// Ci saranno quindi 10 caselle per ognuna delle 10 righe.
// Quando l’utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.


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


        /****** CREO L'ARRAY DEI NUMERI CASUALI ********/

        // Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe.

        // creo un array vuoto
        const arrayBombs = [];

        // inserisco in questo array i numeri casuali

        // devo creare 16 numeri casuali, quindi:
        while (arrayBombs.length < 16){ // continua finché il mio array non è di 16 numeri
            // creo un numero randomico
            let randomNum = generateRandomNum(1, numCell);
            // se questo numero non è dentro l'array -> lo inserisco con push
            if(!arrayBombs.includes(randomNum)){
                arrayBombs.push(randomNum);
            }

        } 

        console.log(arrayBombs);  

        // punteggio iniziale della persona
        let score = 0;
        console.log("punteggio iniziale:",  score);

        // prendo l'elemento della pagina
        const userScore = document.getElementById("user_score");

 

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

            // do una dimensione a seconda della grandezza
            let radix = Math.sqrt(numCell);
            
            let grandezza = 100 / radix;
            cell.style.width = `${grandezza}%`;
            cell.style.height = `${grandezza}%`;

            // inserisco che ogni cella abbia il suo numero
            cell.append(i);



            // aggiungo un click ad ogni elemento se la cella che mi clicca ha lo stesso valore di un numero contenuto nell'arrayBombs allora bomba -> altrimenti continua
            cell.addEventListener("click",
                function(){

                    let safe = true; //condizione di partenza altrimenti mi aggiungeva sempre entrambe le classi                  

                    for(j = 0; j < arrayBombs.length; j++){ //cerca dentro all'array se
                        //se il numero nella cella = ad un numero dell'array -> bomb
                        if(parseInt(cell.innerText) === arrayBombs[j]){ 
                            safe = false;
                            cell.classList.add("bomb");
                            //quando becca la bomba compare il punteggio
                            userScore.innerHTML=`Mi dispiace, hai perso! Il tuo punteggio è di: ${score}`;
                            // console.log("hai perso. Il tuo punteggio è", score);
                        } 
                    }

                    if(safe){ // se non ha preso una bomaba continua.
                        cell.classList.add("safe");
                        score = score + 1; //score lo dichiaro fuori dal FOR perché altrimenti mi riparte da 0
                        console.log("punteggio", score);
                    }

                    if(score === numCell - 16){
                        userScore.innerHTML=`Congratulazioni, hai vinto! Il tuo punteggio è di: ${score}`;
                        // console.log("Congratulazioni, hai vinto!", score);
                    }
                }
            );

            // lo inserisco nel contenitore
            container.append(cell);

        }

        container.classList.add("show");
    }
);

/****************************************/