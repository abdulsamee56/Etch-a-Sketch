let color = 'black';

function PopulateBoard(size){
    let container = document.querySelector('.container');
    let squares = container.querySelectorAll('div');
    squares.forEach((div)=>div.remove());

  

    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${size}, 1fr)`;


    let amount = size*size;
    for (i =0; i < amount;i++){
        let square = document.createElement('div');
        square.addEventListener('mouseover',colorBoard);
        square.style.backgroundColor = 'blue';
        container.insertAdjacentElement('beforeend',square);
    
    }
}

PopulateBoard(16);

function changeSize(input){
    
    if(input >=2 && input <= 100){
    PopulateBoard(input);}
    else{
        alert("Squares must be between 2-100");
    }
}

function changeColor(clr){
    color = clr;
}

function colorBoard(){
        this.style.backgroundColor=color;
}

function resetBoard(){
    let input = document.querySelector('input[type="Size"]')
    let size = input.value;
    PopulateBoard(size);

}