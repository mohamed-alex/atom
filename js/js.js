// navbar
let navSec = document.querySelectorAll('nav .nav-item a');

navSec.forEach((nav) =>{
    nav.onclick = function(e){
        navSec.forEach(n => {
            n.classList.remove('active');
            nav.classList.add('active');
        })
    }
})

// portoflio
  let tabs = document.querySelectorAll('.list li');
  let works = document.querySelectorAll('.works > .all');

  tabs.forEach((tab) => {
    tab.onclick = function(e) {
        tabs.forEach(t => {
            t.classList.remove('active');
            tab.classList.add('active');
        })

        works.forEach(work => {
            work.style.display = 'none';

        })
        document.querySelectorAll(e.target.dataset.cont).forEach(work => {
            work.style.display = 'flex';
        })

    }
})