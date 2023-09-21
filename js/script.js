const number = document.querySelector('span');
let contenitore = [];
random();
console.log(contenitore );

number.innerHTML = contenitore;

setTimeout(function(){
  number.innerHTML= '';
  
}, 5000);

setTimeout(function(){
  const numeriPrompt = promt();
  const numeriPresenti = controlloNumeri(numeriPrompt);
  number.innerHTML= 'I numeri presenti sono: ' + numeriPresenti + ' ne hai indovinato ' + numeriPresenti.length + ' su 5';

},6000);











//fuctionn
function random(){
  for(let i=0 ; i< 5; i++){
    const numeroCasuale = Math.floor(Math.random() * 100);
    contenitore.push(numeroCasuale);
  }
 
}

function promt(){
  let inserisciNumero = [];
  for(let i=0 ;i < 5; i++){
    inserisciNumero.push(parseInt(prompt('inserisci i numeri precedenti')));
    
  }
   return inserisciNumero;
}

function controlloNumeri(arryPromt){

  let numeriInclusi = [];
  for(let i = 0; i < contenitore.length;i++ ){
// 2 ,3 ,6, 4, 1            4 , 4, 12, 5, 3 
    if(contenitore.includes(arryPromt[i])){
      


      if(!(numeriInclusi.includes(arryPromt[i]))){
        numeriInclusi.push(arryPromt[i]);
      }
      

      

      
    }

    

  }
  return numeriInclusi;
}

