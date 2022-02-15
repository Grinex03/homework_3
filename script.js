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
let a = [], b = [], c= [];
a.length = 10;
b.length = 10;
for(i = 0; i < a.length ||b < b.length;  i++){
	a[i] = Math.floor(Math.random()* 10)+10;
	b[i] = Math.floor(Math.random()* 10)+10;
};
a.sort();
b.sort();
console.log(a, b);
let k = a.length, j = b.length;
while (k > 0 && j > 0 ){
	k--;
	j--;
	if(a[k]>= b[j]) j++;
		else if (a[k]<= b[j]) k++ ;
		else c.push(a[k]);
};
console.log(a);

// ***********************************************4*******************************************************************
var mass = [ 1, 2, 3, 4, 5, 6];
[mass[0], mass[1]] = [mass[1], mass[0]];
[mass[2], mass[3]] = [mass[3], mass[2]];
[mass[4], mass[5]] = [mass[5], mass[4]];
console.log(mass);