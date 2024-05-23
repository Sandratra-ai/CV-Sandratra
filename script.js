let name = document.querySelector('h1')
    name.addEventListener('mouseover',change);
    name.addEventListener('mouseout',change1);
function change(){
    this.innerHTML = "FANAMPINTSOA Hajanirina Sandratra";
}

function change1(){
    this.innerHTML = "Mon Curriculum Vitae";
}

let sidenav = document.getElementById('mySidenav');
let openBtn = document.getElementById('openBtn');
let closeBtn = document.getElementById('closeBtn');

openBtn.onclick = openNav;
closeBtn.onclick = closeNav;

function openNav(){
    sidenav.classList.add('active');
}

function closeNav(){
    sidenav.classList.remove('active');
}