const a = Math.floor(Math.random()*6) + 1
const b = 'images/dice' + a + '.png';
document.querySelectorAll('img')[0].setAttribute('src', b);

const c = Math.floor(Math.random()*6) + 1
const d = 'images/dice' + c + '.png';
document.querySelectorAll('img')[1].setAttribute('src', d);

if(a>c){
  document.querySelector('h1').innerHTML = 'The Winner is yung nasa Kaliwa'
}

if(a<c){
  document.querySelector('h1').innerHTML = 'The Winner is yung nasa Kanan'
}

if(a==c){
  document.querySelector('h1').innerHTML = 'The Winner is Wala'
}
