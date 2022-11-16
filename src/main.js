import App from './components/App.js';
import pokemon from './data/pokemon/pokemon.js';
import dataPokemon from "./data/pokemon/pokemon.js";
import mezclar from './utils/shuffle.js';

const root = document.getElementById('root');
const data = [...dataPokemon.items,...dataPokemon.items]
let clickedCards = [];
let countCards = [];

//numeros = numeros.sort (function(){return Math.random() -0.3})

const random = Math.floor(Math.random() * data.length);
//const shuffleCards = Math.floor(Math.floor) * data.length);
console.log();


mezclar(data).forEach ((pokemon)=>{

  const div = document.createElement("div");
  div.classList = "container"
 
  const divBack = document.createElement ("div");
 divBack.classList = "divBack" 
 

 
  const namesPokemons = document.createElement ("h2")

  namesPokemons.textContent= (pokemon.id)
   const imagePoke = document.createElement('img');
  imagePoke.setAttribute("src", pokemon.image);
  
  //funcion hace que solo se destapen dos cartas
  divBack.addEventListener('click',()=>{
    if (clickedCards.length === 2 ){
    clickedCards[0].style.display = "block"
    clickedCards[1].style.display= "block"
    clickedCards = [];
  
  } else{

  countCards.push(div);
  console.log(namesPokemons);
  clickedCards.push(divBack); 
  console.log(clickedCards)
  divBack.style.display = "none" //propiedad que se le dio en css la quite al dar click
}
 if(clickedCards[0].setAttribute(dataPokemon.id) === clickedCards[1].setAttribute(dataPokemon.id)){
  //clickedCards[0].style.display = "block"
  //clickedCards[1].style.display= "block"
  //clickedCards = [];
  console.log("match")
    
} else{

  countCards.push(div);
  console.log(namesPokemons);
  clickedCards.push(divBack); 
  console.log(clickedCards)
  divBack.style.display = "block" //propiedad que se le dio en css la quite al dar click
}


  
       
        
       
  
  //si ya tengo destapadas esas dos tarjetas saber si hacen match y si no taparlas de nuevo 
  //van
      



});


   

div.append(imagePoke, namesPokemons,divBack,);

  root.appendChild (div);

});  


// .getElementsByClassName("") imprime 
//traer los elementos mediante su clase para escuchar su el evento click
//cambio de imagen dentro del escuchador del click 
//rederisar 
//imagePoke.classList.toggle('hidden');
    //imagePoke.classList.toggle('hidden');
    //divBack.push(pokemon.id);
    //imagePoke.push('pokemon'+ root);

  
  //divBack.addEventListener("click", () => 