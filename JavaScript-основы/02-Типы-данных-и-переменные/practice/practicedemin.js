//1
var myNumber = 20,
	myNumber2 = 30.46,
	myNumber3 = 1e+309,
	myNumber4 = -1e+309,
	myString = 'HelloWorld',
	myBool = false,
	myNull = null,
	myUndef = undefined,
	myObject = {
		name: 'Sergey',
		age: 24 
	};

console.log(myNumber);
console.log(myNumber2);
console.log(myNumber3);
console.log(myNumber4);
console.log(myString);
console.log(myBool);
console.log(myNull);
console.log(myUndef);
console.log(myObject.name);


//2

console.log("'Как вы поживаете?' сказал Джои")

//3

console.log(typeof myNumber);
console.log(typeof myNumber2);
console.log(typeof myNumber3);
console.log(typeof myNumber4);
console.log(typeof myString);
console.log(typeof myBool);
console.log(typeof myNull);
console.log(typeof myUndef);
console.log(typeof myObject);
//4

let street ;
console.log(typeof street);


//5.1

var count1 = '1234';
console.log(parseInt(count1)); //1234

var count2 = '1234';
console.log(parseFloat(count2)); //1234

var count3 = '1234';
console.log(Number(count3)); //1234

var count4 = '1234';
console.log('1234'+count4); //12341234

var count5 = '1234';
console.log(count5|0); //1234

//5.2

var fox1 = '1238abc';
console.log(parseInt(fox1)); //1238

var fox2 = '1238abc';
console.log(parseFloat(fox2)); //1238

var fox3 = '1238abc';
console.log(Number(fox3)); //NaN

var fox4 = '1238abc';
console.log('1238abc'+fox4); //1238abc1238abc

var fox5 = '1238abc';
console.log(fox5|0); //0

//5.3

var elephant1 = '0.15';
console.log(parseInt(elephant1)); //0

var elephant2 = '0.15';
console.log(parseFloat(elephant2)); //0.15

var elephant3 = '0.15';
console.log(Number(elephant3)); //0.15

var elephant4 = '0.15';
console.log('0.15'+elephant4); //0.150.15

var elephant5 = '0.15';
console.log(elephant5|0); //0

//5.4

var bird1 = '3.14ivan';
console.log(parseInt(bird1)); //3

var bird2 = '3.14ivan';
console.log(parseFloat(bird2)); //3.14

var bird3 = '3.14ivan';
console.log(Number(bird3)); //NaN

var bird4 = '3.14ivan';
console.log('3.14ivan'+bird4); //3.14ivan3.14ivan

var bird5 = '3.14ivan';
console.log(bird5|0); //0

//5.5

var turtle1 = 'Infinity';
console.log(parseInt(turtle1)); //Nan

var turtle2 = 'Infinity';
console.log(parseFloat(turtle2)); //Infinity

var turtle3 = 'Infinity';
console.log(Number(turtle3)); //Infinity

var turtle4 = 'Infinity';
console.log('Infinity'+turtle4); //InfinityInfinity

var turtle5 = 'Infinity';
console.log(turtle5|0); //0

//5.6

var grasshopper1 = '99999999999999999999';
console.log(parseInt(grasshopper1)); //100000000000000000000

var grasshopper2 = '99999999999999999999';
console.log(parseFloat(grasshopper2)); //100000000000000000000

var grasshopper3 = '99999999999999999999';
console.log(Number(grasshopper3)); //100000000000000000000

var grasshopper4 = '99999999999999999999';
console.log('99999999999999999999'+grasshopper4); //9999999999999999999999999999999999999999

var grasshopper5 = '99999999999999999999';
console.log(grasshopper5|0); //1661992960



