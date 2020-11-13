function getRandomColor()
{
	var letters = "0123456789ABCDEF";
	var color = "#";
	for(var i = 0; i < 6; i++)
	{
		color += letters[ Math.floor(Math.random() * 16) ];
	}
	
	return color;
}

//var square = document.getElementById("square");
var square = $("#square");


var myVar = setInterval(changeColor, 1000);

function changeColor()
{
  square.css("background-color", getRandomColor());    
}






var color_arr = [
    '#EE411B', // red
    '#88DD4A', // green
    '#265EDE', // blue
    '#8BE0CC', // cyan
    '#F464D3', // magenta
    '#FFE72C' // yellow
];
var mainWrap = document.querySelector('.main-box'),
    colorBar = mainWrap.querySelectorAll('.color-bar'),
    wordEl = mainWrap.querySelector('.rainbow'),
    color = '#';
    

// var colors = ['#ff0000', '#00ff00', '#0000ff'];
// var random_color = color_arr[Math.floor(Math.random() * color_arr.length)];
// colorBar.style.backgroundColor = random_color;


// ----------------


// var x = document.getElementsByClassName("ms-webpart-chrome-title");
// var i;
// var c;

// // var colors = ["#009933", "#006699", "#33cccc", "#99cc00", "#f60"];
// var length = color_arr.length;

// for (i = 0; i < colorBar.length; i++){
//     while (i < length) {
//         c = i;
//         var random_color = color_arr[c];
//         colorBar[i].style.backgroundColor = random_color;
//         i++;
//     }
//     while (i >= length) {
//         var random_color = color_arr[Math.floor(Math.random() * color_arr.length)];
//         colorBar[i].style.backgroundColor = random_color;
//         i++;
//     }
// }



// function randomColor(){
//     colorBar.style.transform = 'background-color'
// }



    
// var time = 1;
// var move = null;
// var ani = 0;
// var tt = intervalColor();
// function intervalColor(){
//     setInterval(function(a){
//         ani += 1;
//         if(ani >= 200){
//             clearInterval(tt);
//         }
//         colorBar.style.backgroundColor = 'color + randomItem(color_arr)';
        
//     }, 6);
//     return a[Math.floor(Math.random() * a.length)];
// }

// wordEl.addEventListener('mouseover', intervalColor());





// function getRandomColor(){
//     // var letters = "0123456789ABCDEF";
//     var color = "#";
//     for(var i = 0; i < color_arr.length; i++)
//     {
//         // color += color_arr[ Math.floor(Math.random() * 16) ];
//         color += color_arr[i];
//     }
//     // console.log(color);

//     return color;
// }

// var myVar = setInterval(changeColor(), 1000);

// function changeColor(){
//     // colorBar.style("background-color", getRandomColor());
//     // colorBar.style.backgroundColor = getRandomColor();
//     var R = getRandomColor();
//     var G = getRandomColor();
//     var B = getRandomColor();
//     var C = getRandomColor();
//     var M = getRandomColor();
//     var Y = getRandomColor();
//     var backgroundColor = "rgb(" + R + "," + G + "," + B + "," + C + "," + M + "," + Y + ")";
//     // colorBar.style.backgroundColor = backgroundColor;
//     if(myVar === 1000){
//         colorBar.style.backgroundColor = backgroundColor;
//     }
// }

// window.onload = pageLoad;
// function pageLoad(){
//     myVar;
// };

// function colorValue() {
//     var randomColor = Math.floor(Math.random() * 256);
//     return randomColor;
//   }
//   //RANDOM BACKGROUND COLOR FUNCTION
//   function randomRGBValue() {
//       //SETS RANDOM RED VALUE
//       var red = colorValue();
//       //SETS RANDOM GREEN VALUE
//       var green = colorValue();
//       //SETS RANDOM BLUE VALUE
//       var blue = colorValue();
//       //ADDS RGB VALUES TOGETHER SETS VARIABLE
//       var backgroundColor = "rgb(" + red + "," + green + "," + blue + ")";
//       //SETS STYLE AS BACKGROUND
//       document.body.style.background = backgroundColor;
// };




// function getRandomColor(min, max){
//     var step1 = max - min +1;
//     var step2 = Math.random() * step1;
//     var result = Math.floor(step2) + min;
//     return result;
// }
// wordEl.addEventListenter('mouseover')

// function changeRandomColor(){
//     var index = getRandomColor(0, color_arr.length-1);
//     colorBar.style.backgroundColor = color_arr[index];
// }


 

