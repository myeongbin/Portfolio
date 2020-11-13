// console.log("Script Load");

/* VARIABLE */
var colorBar = document.querySelectorAll('.color-bar'),
    colorArr = ['#EE411B', '#88DD4A', '#265EDE', '#8BE0CC', '#F464D3', '#FFE72C'];
// console.log(colorBar);

/* FUNTION */
function colorChange(){
    // alert('Start Interval');
    for(var i = 0; i < colorBar.length; i++){
        // console.log('colorbar change');
        // colorBar[i].style.backgroundColor = '#000000';

        // colorBar Style
        // var random = Math.floor(Math.random() * colorArr.length);
        // console.log(colorArr[random]);
        // colorBar[i].style.backgroundColor = 'colorArr[random]';
    }
}

var randomColor = setInterval(colorChange, 5000);




