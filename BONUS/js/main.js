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

        /****** CREO L'ARRAY DEI NUMERI CASUALI ********/

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

        // punteggio iniziale della persona
        let score = 0;
        console.log("punteggio iniziale:",  score);

        // prendo l'elemento della pagina
        const userScore = document.getElementById("user_score");


        /*******CREO LA GRIGLIA DINAMICA******/

        // prendo l'elemento nella quale dovrà comparire
        const container = document.querySelector(".grid");
        // console.log(container);

        // creo la griglia interna andando a creare un elemento per ogni spazio che ho (in questo caso 10*10 = 100)
        for(i = 1; i <= 100; i++){

            // creo l'elemento con la funzione
            let cell = createElemntWithClass("div", "box")

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

                    if(score === 100 - 16){
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