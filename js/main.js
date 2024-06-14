// Consegna
// L’utente clicca su un bottone che genererà una griglia di gioco quadrata.
// Ogni cella ha un numero progressivo, da 1 a 100.
// Ci saranno quindi 10 caselle per ognuna delle 10 righe.
// Quando l’utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.


// CREO LA GRIGLIA DINAMICA

// prendo l'elemento nella quale dovrà comparire
const container = document.querySelector(".grid");
console.log(container);

// creo la griglia interna andando a creare un elemento per ogni spazio che ho (in questo caso 10*10 = 100)
for(i = 1; i <= 100; i++){

    // creo l'elemento con la funzione
    let cell = createElemntWithClass("div", "box")

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

/****************************************/

// AL CLICK DEL BOTTONE FACCIO COMPARIRE LA GRIGLIA


// prendo il bottone
const btn = document.querySelector(".start_game");

// al click del bottone aggiungo una classe alla griglia che la farà comparire

btn.addEventListener("click", 
    function(){
        container.classList.add("show");
    }
);

/****************************************/