// console.log("Script Load");

/* VARIABLE */
var colorBar = document.querySelectorAll('.color-bar'),
    colorArr = ['#EE411B', '#88DD4A', '#265EDE', '#8BE0CC', '#F464D3', '#FFE72C'];
// console.log(colorBar);

/* FUNTION */
function colorChange(){

    var random = Math.random() * colorArr.length;
    var number = Math.floor(random); 
    var newColor = colorArr[number]; 

    for(var i = 0; i < colorBar.length; i++){
        colorBar[i].style.backgroundColor = newColor;
        colorBar[i].style.transition = 'all 1s ease';
        
        console.log(colorBar[i]);
    }

    if (newColor.length < 6 && newColor.indexOf(n) < 0) {
        newColor.push(n);
        return colorChange[newColor];
    } else {
        return newColor; 
    }

    // 1.
    // function shuffleArray(array) {
    //     for (var i = array.length - 1; i > 0; i--) {
    //         var j = Math.floor(Math.random() * (i + 1));
    //         var temp = array[i];
    //         array[i] = array[j];
    //         array[j] = temp;
    //     }
    // }
    // // Updating to ES6 / ECMAScript 2015
    // function shuffleArrayES6(array) {
    //     for (let i = array.length - 1; i > 0; i--) {
    //         const j = Math.floor(Math.random() * (i + 1));
    //         [array[i], array[j]] = [array[j], array[i]];
    //     }
    // }
    
    // 2.
    // alert('Start Interval');
    // for(var i = 0; i < colorBar.length; i++){
    //     // console.log('colorbar change');
    //     // colorBar[i].style.backgroundColor = '#000000';

    //     // colorBar Style
    //     var random = Math.floor(Math.random() * colorArr.length);
    //     console.log(colorArr[random]);
    //     colorBar[0].style.backgroundColor = 'colorArr[random]';
    //     // colorBar[0].style.backgroundColor = '#000';
    // }
}

var randomColor = setInterval(colorChange, 4000);




