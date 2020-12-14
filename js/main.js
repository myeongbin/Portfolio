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
        
        // console.log(colorBar[i]);
    }

    if (newColor.length < 6 && newColor.indexOf(n) < 0) {
        newColor.push(n);
        return colorChange[newColor];
    } else {
        return newColor; 
    }
}

var randomColor = setInterval(colorChange, 2500);

// var randomColor = setTimeout(colorChange, 4000);




