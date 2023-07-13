
//bottone
const btnplay = document.getElementById('play')
//container generale
const containerGame = document.querySelector('.container')
//container effettivo dei quadratini
const gridSquare = document.createElement('div')
gridSquare.classList = ('container-grid')
//appendom il container grid all container generale
containerGame.append(gridSquare)
let listaBomb =[]
let gameover = 0
btnplay.addEventListener('click',play)
function play(){
        //troviamo il vallore delle celle da caricare
        const valueSquare = document.getElementById('select').value
        // console.log(valueSquare)
        //creazione della griglia utilizzando il valore inserito
        const griglia = createGrid(valueSquare)
        //crerata una lista di bombe 
        console.log(griglia)
        const bombe = createBomb(valueSquare) 
        console.log(bombe)
        //inseriamo la griglia nel container dedicato
        insertGrid(gridSquare,griglia) 
    
}

/**
 * creaione di goni singola cella 
 * @param {number} numeroCelle valore dato dall utente
 * @param {number} i serve per identificare la cella
 * @param {number} randomNumber numero casuale 
 * @returns 
 */
function createSquare(numeroCelle,i,randomNumber){
    
    const singleSquare = document.createElement('div')
    const grandezza = Math.sqrt(parseInt(numeroCelle))
    singleSquare.classList = ('square')
    singleSquare.style.flexBasis = `calc(100% /${grandezza} ) `
    // singleSquare.innerHTML = i
    singleSquare.innerHTML = `${i}` 
    singleSquare.addEventListener('click',squareclick)
    if(gameover = 1){
        block()
    }
    /**
     * effetto al click di ogni singolo quadrato
     */
    function squareclick(){
    this.classList.toggle('bg-primary');
    console.log(this)
    if(listaBomb.includes(i)){
        gameover = 1

        alert('bomb')
        
    }
    // singleSquare.innerHTML = i
    } 
    
    
    
    
    return singleSquare
}
function block(){
    el = document.querySelectorAll('.square')
    for (let i =0; i<el.length;i++){
        console.log(el[i])
        let io =el[i]
        io.removeEventListener('click',squareclick)
    }
    return 
    }
/**
 * creazione dell'array contenente tutte le celle
 * @param {number} numeroCelle valore dato dall utente
 * @returns ritorna un array di square
 */
function createGrid(numeroCelle){
    array = []
    for (let i = 0; i < numeroCelle; i++) {
        const randomNumber = Math.floor(Math.random()*100) // creazione di numero casulae da assegnare ad ogni cella
        let newsquare = createSquare(numeroCelle,i,randomNumber) //gli passiamo il numero cella e i suo identificativo
        // newsquare.innerText = i
        array.push(newsquare)
        
    }
    return array
}
/**
 * inserimento di ogni cella di un array su un container
 * @param {HTMLDivElement} container 
 * @param {[]} grid 
 * @returns 
 */
function insertGrid (container,grid){
    container.innerHTML = ""
    for (let i = 0; i < grid.length; i++) {
        container.append(grid[i])
        
    }
    return container
}

function createBomb(numeroCelle){
    listaBomb = []
    for (let i = 0; i < 16;i++){
        let bomb = Math.floor(Math.random()*numeroCelle)
        listaBomb.push(bomb)
    }
    return listaBomb
}
function controlBomb(lista){
    let square = document.querySelector('.square')
    let randomNumber = square.textContent
    for(let i = 0;i < lista.length; i++){
        if(randomNumber === lista[i])
        console.log(randomNumber)
    }
}