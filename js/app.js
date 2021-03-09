
const hamburger = document.getElementsByClassName('fa-hamburger')[0];
const nav = document.getElementsByTagName('nav')[0];
const a = document.querySelectorAll('a');
const dots1 = document.getElementsByClassName('dots1')[0];
const dots2 = document.getElementsByClassName('dots2')[0];
const dots3 = document.getElementsByClassName('dots3')[0];
const img1 = document.getElementsByClassName('img1')[0];
const img2 = document.getElementsByClassName('img2')[0];
const img3 = document.getElementsByClassName('img3')[0];
const header = document.getElementById('header');


hamburger.addEventListener('click', function() {
    this.classList.toggle('fa-times');
    nav.classList.toggle('nav-toggle');
});

for(let i=0 ; i<a.length ; i++){
    a[i].addEventListener('click', function(){
        hamburger.classList.remove('fa-times');
        nav.classList.remove('nav-toggle');
    });
}

dots1.addEventListener('click', function() {
    img1.style.display = 'block';
    img2.style.display = 'none';
    img3.style.display = 'none';
});

dots2.addEventListener('click', function() {
    img2.style.display = 'block';
    img1.style.display = 'none';
    img3.style.display = 'none';
});

dots3.addEventListener('click', function() {
    img3.style.display = 'block';
    img2.style.display = 'none';
    img1.style.display = 'none';
});

window.onscroll = function() {scrollfunction()};
function scrollfunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById('header').classList.add('header-active');
  }else{
    document.getElementById('header').classList.remove('header-active');
  }
}

