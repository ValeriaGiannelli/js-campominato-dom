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

        // prendo l'elemento della pagina riguardante il punteggio
        const userScore = document.getElementById("user_score");
        userScore.innerHTML='';

        // prendo gli elementi per end_game di vincita e di perdita
        const endGame_win = document.querySelector(".win")
        const endGame_lose = document.querySelector(".lose")

        if(endGame_win.classList.contains("show")){
            endGame_win.classList.remove("show");
        }

        if(endGame_lose.classList.contains("show")){
            endGame_lose.classList.remove("show");
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

            // do una dimensione a seconda della grandezza
            let radix = Math.sqrt(numCell);
            
            let grandezza = 100 / radix;
            cell.style.width = `${grandezza}%`;
            cell.style.height = `${grandezza}%`;

            // inserisco che ogni cella abbia il suo numero
            cell.append(i);

            // inserisco una classe specifica per le bombe, unicamente per indicarle
            for(j = 0; j < arrayBombs.length; j++){
                if(parseInt(cell.innerText) === arrayBombs[j]){ 
                    cell.classList.add("bomb");
                } 
            }

            // aggiungo un click ad ogni elemento se la cella che mi clicca ha lo stesso valore di un numero contenuto nell'arrayBombs allora bomba -> altrimenti continua
            cell.addEventListener("click",
                function(){

                    let safe = true; //condizione di partenza altrimenti mi aggiungeva sempre entrambe le classi                  

                    // faccio un ciclo for per cercare dentro all'array delle bombe se il numero cliccato è presente anche lì
                    for(let j = 0; j < arrayBombs.length; j++){ 
                        //se il numero nella cella = ad un numero dell'array -> bomb
                        if(parseInt(cell.innerText) === arrayBombs[j]){ 
                            // la condizione diventa falsa
                            safe = false;    
                            // se clicca sulla bomba tutti i div devono mostrarsi:                         
                            // creo un array coi div che hanno la classe bomb
                            const cellBombs = document.querySelectorAll(".bomb");
                            console.log(cellBombs);
                            
                            // aggiungo ad ogni elemento di questo array la classe cliccato così che mostri le bombe
                            for(let k = 0; k < cellBombs.length; k++){
                                cellBombs[k].classList.add("bomb_clicked");
                                cellBombs[k].innerHTML = `<img src="img/boss.png" alt="">`;
                            }

                            // mostro il div di fine gioco
                            endGame_lose.classList.add("show");
                           
                            //quando becca la bomba compare il punteggio
                            userScore.innerHTML=`Mi dispiace, hai perso! Il tuo punteggio è di: ${score}`;
                        } 
                    }

                    if(safe){ // se non ha preso una bomaba continua.
                        cell.classList.add("safe");
                        cell.innerHTML = `<img src="img/campifire.png" alt="">`;
                        score = score + 1; //score lo dichiaro fuori dal FOR perché altrimenti mi riparte da 0
                        console.log("punteggio", score);
                    }

                    if(score === numCell - 16){
                        // mostro la schermata di vincita
                        endGame_win.classList.add("show");
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