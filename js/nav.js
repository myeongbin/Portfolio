// Variable Start
var menuBg = document.querySelector('.menu-bg'),
    menuBtn = document.querySelector('.menu-btn'),
    spanEls = document.querySelectorAll('.menu-btn > span'),
    menuOpen = false;

var hiddenNav = document.querySelector('.full-bg-nav'),
    nav = document.querySelector('.nav'),
    menuWrapEl = nav.querySelector('.menu-wrap'),
    menuEls = menuWrapEl.querySelectorAll('.menu-list'),
    aEls = menuWrapEl.querySelectorAll('div > a'),
    dotEls = menuWrapEl.querySelectorAll('div > .dot'),
    menuSelected = false;

    // console.log(aEls);


// Function Start

// Change Menu Event
function onChangeMenu(e){
    if(!menuSelected){
        menuEls.classList.add('selected');
    }else{
        menuEls.classList.remove('selected');
    }
}

// Click Menu Button Event
function onClickMenuBtn(e){
    if(!menuOpen){
        menuBtn.classList.add('open');
        menuOpen = true;
        console.log('menu Open');

        menuBg.style.backgroundColor = "#F8F8F4";

        hiddenNav.classList.add('visible');

    }else{
        menuBtn.classList.remove('open');
        menuOpen = false;
        console.log('menu Close');

        menuBg.style.backgroundColor = "#000";
        // menuBtn.style.backgroundColor = "#F8F8F4";

        hiddenNav.classList.remove('visible');
    }
}

menuBtn.addEventListener("click", onClickMenuBtn);
// menuEls.addEventListener("click", "scroll", onChangeMenu);