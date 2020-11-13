













// var workWrap = document.querySelector('.work-wrap'),
//     workEl = workWrap.querySelector('.work'),
//     workArea = workWrap.querySelector('.work-area'),
//     contentEls = workArea.querySelectorAll('.work-contents'),
//     bgCircle = document.querySelectorAll('.bg-circle'),

//     indexWrap = workWrap.querySelector('.index-wrap'),
//     // indexNumWrap = workWrap.querySelector('.index-num-wrap'),    
//     indexNum = indexWrap.querySelector('.index-num'),
//     indexNumEls = indexWrap.querySelector('.index-num li'),
//     btnPaddle = indexWrap.querySelectorAll('.btn-paddel li button'),
//     btnPrev = document.querySelector(".prev"),
//     btnNext = document.querySelector(".next"),

//     indexDot = indexWrap.querySelector('.index-dot'),
//     indexDotEls = indexWrap.querySelectorAll('.index-dot li'),
//     btnIndexDotEls = indexWrap.querySelectorAll('.index-dot li a');


// var _cuId = 0,
//     _exId = null,
//     _max = null,

//     _isAni = false,

//     _contentW = 1400,

//     _duration = 300,
//     _addDuration = 200;


// btnIndexDotEls = Array.prototype.slice.call(btnIndexDotEls);

// // FUNCTION START
// function onTransitionEnd(e){
//     _isAni = false;
//     workArea.style.removeProperty("transition");
// }

// function onClickDot(e){
//     e.preventDefault();
//     if(_isAni) return;
//     var el = e.currentTarget, 
//         parentEl = el.parentElement, 
//         index = btnIndexDotEls.indexOf(el);
    
//     if(!parentEl.classList.contains("selected")){
//         _cuId = index;
//         indexDotEls[_exId].classList.remove("selected");
//         parentEl.classList.add("selected");
        
//         contentSlide();
//     }
// }

// function contentSlide(static){
//     var left = _contentW * _cuId * -1;
//     var duration = _duration + _addDuration * Math.abs(_cuId - _exId);
//     var bool = (static) ? static : false;

//     workArea.style.transform = "translate3d(" + left + "px, 0, 0";

//     if(!bool){
//         _isAni = true;
//         workArea.style.transition = "transform" + duration + "ms cubic-bezier(0.455, 0.03, 0.515, 0.955";
//         _exId = _cuId;
//     }else{
//         workArea.style.removeProperty("transition");
//         _isAni = false;
//     }
// }

// function contentResize(){
//     workEl.style.width = _contentW + "px";
//     workArea.style.width = _contentW * _max + "px";
//     for(var i = 0; i < _max; i++){
//         contentEls[i].style.width = _contentW + "px";
//     }
//     contentSlide(true);
// }

// function addEvent(){
//     workArea.addEventListener("webkitTransitionEnd", onTransitionEnd);
//     workArea.addEventListener("transitionend", onTransitionEnd);

//     for(var i = 0; i < _max - 1; i++){
//         console.log(btnIndexDotEls[i]);
//         btnIndexDotEls[i].addEventListener("click", onClickDot);
//     }
// }

// function init(){
//     _max = contentEls.length;
//     // console.log(_max);
//     _exId - _cuId;
//     addEvent();
//     contentResize();
// }

// init();