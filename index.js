let color = 'black';
let click = true;
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
        square.style.backgroundColor = 'white';
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
    //this portion allows the buttons to work in the html file under class colorB
    /*if (click) { // Check if click is true
        color = clr;
      }*/

      color= clr;
    
}

function colorBoard(){
    //this portion allows to color the board upon clicking
    /*if (click) { // Check if click is true
        this.style.backgroundColor = color;
      }*/

    this.style.backgroundColor = color;
}

function resetBoard(){
    let input = document.querySelector('input[type="Size"]')
    let size = input.value;
    PopulateBoard(size);

}


function getRandomColor() {
    // Generate random values for red, green, and blue channels
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);

    // Construct the RGB color string
    color = `rgb(${red}, ${green}, ${blue})`;

    // Return the generated color
    return color;
  }

//this line of code makes it so that we can left click to activate drawing/turn off
/*document.querySelector('body').addEventListener('click',()=>{
    click = !click;
  });*/
 