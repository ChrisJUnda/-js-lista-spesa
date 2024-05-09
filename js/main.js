'use strict';

//Attribuisco una classe alla lista della spesa

const listaDellaSpesa = [
  'Farina',
  'Pollo',
  'Coca-Cola',
  'Cioccolata',
  'Cacao in polvere',
  'Acqua',
  'Pomodoro',
  'Maionese',
  'Salsa BBQ',
]; 

const ul = document.getElementById('lista');

for (let i = 0; i < listaDellaSpesa.length; i++) {
  
  const li = document.createElement('li'); 

  li.innerText = listaDellaSpesa[i]; 
  li.classList.add('elemento-lista');

  ul.append(li); 
}

let index = 0;

while (index < listaDellaSpesa.length) {
  console.log(index);
  console.log(listaDellaSpesa[index]);

  const li = document.createElement('li');
  li.append(listaDellaSpesa[index]);

  ul.append(li);

  

  index++;
}