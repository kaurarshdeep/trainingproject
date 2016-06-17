document.write(isNaN("37.78"));  //functions
document.write("<br>");
document.write(isFinite(56));
document.write("<br>");
document.write(decodeURI("https://developer.mozilla.org/ru/docs/JavaScript_%D1%88%D0%B5%D0%BB%D0%BB%D1%8B"));
document.write("<br>");
document.write(parseInt("1111", 2));
document.write("<br>");
document.write(decodeURIComponent("JavaScript_%D1%88%D0%B5%D0%BB%D0%BB%D1%8B"));

document.write("<br>");             
document.write("<br>");
document.write("<br>");

document.write(Math.trunc(-11.567));         //math
document.write( "<br>");
document.write(Math.sign(-9));
document.write("<br>");
document.write(Math.cos(6));
document.write("<br>");
document.write(Math.random());
document.write("<br>");
document.write(Math.max(10,50,-70,60));

document.write("<br>");
document.write("<br>");
document.write("<br>");


var array=[2,7,8,45,9];                           //array
document.write(array.indexOf(9));
document.write("<br>");  
var sports=['cricket','badminton'];
var total=sports.push('swimming','basketball' );
document.write(sports);
document.write("<br>");
document.write(total);           

document.write("<br>");
document.write("<br>");
document.write("<br>");

var hello = 'Hello, ';                              //string
document.write(hello.concat('kevin', 'have a nice day.')); 
var str='Where there is will, there is a way.';
document.write("<br>");
document.write(str.endsWith('day.'));
document.write("<br>");
var re=/apples/gi;
var str='I love apples.Apples are good for health.';
var newstr = str.replace(re, 'Mangoes');
document.write(newstr);

 

