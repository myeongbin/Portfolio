let snsEl = document.querySelector(".contact"),
    snsEls = snsEl.querySelectorAll("li a"),
    
    menuBgEl = document.querySelector(".menu-bg"),
    menuBtnEl = menuBgEl.querySelector(".menu-btn"),
    menuBtnLine = menuBtnEl.querySelectorAll("span"),

    pageIndex = document.querySelector(".page-index"),

    sectionWrap = document.querySelector(".section-wrap"),
    prevSection = document.querySelector("#about-main"),
    nextSection = document.querySelector("#introduce"),

    _scrollTop = 0,
    _exScrollTop = null;

function init(){
    addEvent();
}

function addEvent(){
    window.addEventListener("scroll",onScroll);
}

function onScroll(e){
    var _scrollTop = window.scrollTop;

    scrollActive();

    _exScrollTop = _scrollTop;
}

function scrollActive(){
    
    if(_exScrollTop === null) return;
    if(_scrollTop < 0) return;

    // if(_scrollTop >= sectionWrap.innerHeight()  - window.innerHeight()) return;

    if(_scrollTop < _exScrollTop){
        console.log("Up");
    }else{
        console.log("Down");
    }
}

init();