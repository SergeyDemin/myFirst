//1
var a = 3;
var result = !!(a%2);
console.log(result);

a=3 ;
var result = !!!(a%2);
console.log(result);

var b = 2;
var result = !!!(b%2);
console.log(result);

var c = -2;
var result = !!!(c%2);
console.log(result);


var d = -1;
var result = !!!(d%2);
console.log(result);

var e = 0;
var result = !!!(e%2);
console.log(result);

//2

var f = 3;
var result = (!!!(f%4))&&(!!!(f%7));
console.log(result);

//3
var w = 2.5,
    h = 3;
var result1 = w * h ;
    result2 = (w + h) * 2;
console.log(result1 + ' ' + result2);

//4

//Условные Выражения

//1

var a = 15,
    b = 10;
if (a > b) {
    console.log('True'); 
    var c = a;
    a = b;
    b = c;
} else {
    console.log('False');
};

//2

var a = 10,
    b = 3,
    c = 4;

if (a == 0 || b == 0 || c == 0) {
    console.log('0');
} else if (

 (a < 0 && b < 0 && c > 0) ||
 (b < 0 && c < 0 && a > 0) ||
 (a < 0 && a < 0 && b > 0) ||    
 (a > 0 && b > 0 && c > 0)
)
    {
console.log('+')
} else {
    console.log('-')
}
   
//3

var a = 15,
    b = 20,
    c = 30;

if ((a > b) && (a > c)){
    console.log('Число:15');
}
else if ( 
    ((b > a) && (b > c))
    ) {
    console.log('Число:20');
}
else if (
      ((c > a) && (c > b))
        ) {
    console.log('Число 30');
}

//4

var a = 1,
    b = 2,
    c = 3;
if ((c > b) && (c > a)) {
    console.log(c);
    console.log(b);
    console.log(a);
} else if (
   ((b > a) && (b > a)) 
) {
    console.log(b);
    console.log(a);
    console.log(c);
} else if (
((a > b) && (a > c))
) {
    console.log(a);
    console.log(b);
    console.log(c); 
}


          



