c = 2;
var a = [];
let b = 0;
a.length = 10;
for (i = 0; i < a.length; i++){
	a[i] = Math.floor(Math.random()*30);
	if(a[i] % c !== 0){
		b = a.slice();
		console.log(i,b[i]);
	}
};

// **************************************************1.b***********************************************************
let max = a[0];
let min = a[0];
for(i = 1; i < a.length; i++){
	if(a[i]> max){
		max = a[i];
	}
	if(a[i]< min){
		min = a[i];
	}
};
console.log(`Максимальное число ${max},  Минимальное число ${min}`);
// **************************************************2************************************************************

let rev =[1,2,3,4,5,6,7,8,9,10];
for (i = rev.length-1; i>=0 ; i--) {
	console.log(i,rev[i]);	
};
// ************************************************3***************************************************************
let a = [], b = [];
let res = '';

a.length = 10;
b.length = 10;
for(i = 0; i < a.length ||b < b.length;  i++){
	a[i] = Math.floor(Math.random()* 10)+10;
	b[i] = Math.floor(Math.random()* 10)+10;
}; 
for (let i in a) {
	for (let j in b) {

		if (a[i] == b[j]) {
			res +=a[i] + '; ';
		}
	}
}
console.log(res);


// ***********************************************4*******************************************************************
var mass = [ 1, 2, 3, 4, 5, 6];
[mass[0], mass[1]] = [mass[1], mass[0]];
[mass[2], mass[3]] = [mass[3], mass[2]];
[mass[4], mass[5]] = [mass[5], mass[4]];
console.log(mass);