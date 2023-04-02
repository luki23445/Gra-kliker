console.clear()
const tab = [];
tab.push("<tr>" + "<td>" + "Imię" + "</td>"	+ "<td>" + "Wynik" + "</td>" + "<td>" + "Data" + "</td>" + "<td>" + "Godzina" + "</td>" + "</tr>")

var button = document.getElementById("kliker"),
  count = 0;
  button.addEventListener('click', button_click=>{
    count += 1;
  button.innerHTML = "Ilość kliknięć: " + count;
  document.title = "Ilość kliknięć: " + count;
});

var buttons = document.getElementsByTagName('button');

Array.prototype.forEach.call(buttons, function(b){
  b.addEventListener('click', utwozbombla);
})

function utwozbombla(e)
{
  if(this.getElementsByClassName('bombel').length > 0)
    {
      this.removeChild(this.childNodes[1]);
    }
  
  var fala = document.createElement('div');
  this.appendChild(fala);
  
  var d = Math.max(this.clientWidth, this.clientHeight);
  fala.style.width = fala.style.height = d + 'px';
  
  fala.style.left = e.clientX - this.offsetLeft - d / 2 + 'px';
  fala.style.top = e.clientY - this.offsetTop - d / 2 + 'px';
  
  fala.classList.add('bombel');
}


let div = document.querySelector('.div');
let kla = document.querySelector('.kla');
let kliker = document.querySelector('.kliker');
let progres_bar = document.querySelector('.progres_bar');
let progres = document.querySelector('.progres');
let menu = document.querySelector('.menu');
let jeden = document.getElementById('jeden');
let dwa = document.getElementById('dwa');
let trzy = document.getElementById('trzy');
let start = document.getElementById('start');
let koniec = document.getElementById('koniec');
let koniec_czasu = document.getElementById('koniec_czasu');
let ustawienia_pop = document.getElementById('ustawienia_pop');
let tabelka_pop = document.getElementById('tabelka_pop');
let test = document.getElementById('test');
let ranking = document.getElementById('ranking')
let czas = 16500
let imie = 


document.addEventListener("keyup", function(enter) {
  if (enter.key === 'Enter') {
    tabelka_pop.style.display = 'none'
    ustawienia_pop.style.display = 'none'
   kla.style.display = 'none';
   setTimeout(() => {
    jeden.style.animationName = 'focus-in';
    jeden.style.animationDuration = '0.5s';
    jeden.style.display = 'block'
    dwa.style.display = 'none'
    trzy.style.display = 'none'
    start.style.display = 'none'
    koniec.style.display = 'none';
    kliker.style.display = 'none';
    progres_bar.style.display = 'none';
    koniec_czasu.style.display = 'none'
    document.title = "3";
    menu.style.display = 'none'
    
}, 500);
setTimeout(() => {
  jeden.style.animationName = 'focus-out';
  jeden.style.animationDuration = '0.5s';
}, 1500);
setTimeout(() => {
  dwa.style.animationName = 'focus-in';
  dwa.style.animationDuration = '0.5s';
    dwa.style.display = 'block'
    jeden.style.display = 'none'
    trzy.style.display = 'none'
    start.style.display = 'none'
    document.title = "2";
}, 2000);
setTimeout(() => {
  dwa.style.animationName = 'focus-out';
  dwa.style.animationDuration = '0.5s';
}, 3000);
setTimeout(() => {
  trzy.style.animationName = 'focus-in';
  trzy.style.animationDuration = '0.5s';
  trzy.style.display = 'block'
    jeden.style.display = 'none'
    dwa.style.display = 'none'
    start.style.display = 'none'
    document.title = "1";
}, 3500);
setTimeout(() => {
  trzy.style.animationName = 'focus-out';
  trzy.style.animationDuration = '0.5s';
}, 4500);
setTimeout(() => {
  start.style.animationName = 'focus-in';
  start.style.animationDuration = '0.5s';
  start.style.display = 'block'
    jeden.style.display = 'none'
    dwa.style.display = 'none'
    trzy.style.display = 'none'
    document.title = "START!";
}, 5000);
setTimeout(() => {
  start.style.animationName = 'focus-out';
  start.style.animationDuration = '0.5s';
}, 6000);
   setTimeout(() => {
    count = 0
    button.innerHTML = "Ilość kliknięć: " + "0";
    document.title = "Ilość kliknięć: " + "0";
    setTimeout(() => {
      div.style.display = 'none';
      kliker.style.display = 'block'
      progres_bar.style.display = 'block'
      progres.style.animationName = 'progres';
      progres.style.animationDuration = '10s';
      progres.style.animationTimingFunction = 'linear'
    }, 500);
}, 6000);
setTimeout(() => {
      koniec_czasu.style.display = 'block'
      start.style.display = 'none';
      div.style.display = 'block';
      const d = new Date()
      let rok = d.getFullYear();
      let mies = d.getUTCMonth();
      let dzien = d.getUTCMonth();
      let godz = d.getHours()
      let min = d.getMinutes()
      let sec = d.getSeconds()
      console.clear()
      setTimeout(() => {
        setTimeout(() => {
          let imie = prompt("Podaj imię", "Bolek")
            setTimeout(() => {
            tab.push("<tr>" + "<td>" + imie + "</td>"	+ "<td>" + count + "</td>" + "<td>" + rok + '-' + mies + '-' + dzien + "</td>" + "<td>" + godz + '-' + min + '-' + sec.toFixed(0) + "</td>" + "</tr>")
            }, 1000);
              setTimeout(() => {
              ranking.innerHTML = tab
              }, 2000);
          }, 1000);
        menu.style.display = 'block'
        koniec_czasu.style.display = 'none'
        progres_bar.style.display = 'none'
        kliker.style.display = 'none';
        div.style.display = 'block';
        koniec.innerHTML = "Twój wynik to: " + count + '<br>' + '<h1>' + "Kliknij enter aby rozpocząć" + '</h1>';
        koniec.style.display = 'block';
        start.style.display = 'none';
        jeden.style.display = 'none';
        dwa.style.display = 'none';
        trzy.style.display = 'none';
  }, 2000);
}, czas);
  }
});

let ustawienia = document.getElementById('ustawienia');

ustawienia.addEventListener('click', ustawienia_open=>{
    let a = document.getElementById('ustawienia_pop');
    
  if (window.getComputedStyle(a).display === "none") {
    a.style.display = "block";
  }
  else if (window.getComputedStyle(a).display === "block") {
    a.style.display = "none";
  }

});

let tabelka = document.getElementById('tabelka');

tabelka.addEventListener('click', tabelka_open=>{
    let b = document.getElementById('tabelka_pop');
    
  if (window.getComputedStyle(b).display === "none") {
    b.style.display = "block";
  }
  else if (window.getComputedStyle(b).display === "block") {
    b.style.display = "none";
  }
});

document.getElementById("k_tlo").addEventListener("change",function(a){
  document.body.style.backgroundColor = a.target.value;
});

document.getElementById("k_przycisk").addEventListener("change",function(b){
  let kliker = document.getElementById('kliker')
  kliker.style.backgroundColor = b.target.value;
});

document.getElementById("k_progres").addEventListener("change",function(c){
  progres.style.backgroundColor = c.target.value;
});

window.oncontextmenu = function(d) {
  d.preventDefault();
}
