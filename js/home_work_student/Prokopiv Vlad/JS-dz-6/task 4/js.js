var vasya = { name: 'Вася', age: 23 };
var masha = { name: 'Маша', age: 18 };
var vovochka = { name: 'Вовочка', age: 6 };

var people = [ vasya , masha , vovochka ];

function sortAge (arr){

	arr.sort(function (a, b){return a.age - b.age});
	return arr;
}

console.log(sortAge(people));
