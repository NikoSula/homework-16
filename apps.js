// დავალება #1


function number(a){
    let b = a * a;
    return b;
}

let num = number(4);
console.log(num);





//დავალება #2


function product(a, b){
    let after = a - a * b / 100;
    return after;
}

let productOne = product(400, 25);
let productTwo = product(1200, 32);
console.log(productOne, productTwo);






//დავალება #3


function randNum(){
    let rand = Math.round(Math.random() * 100);
    return rand;
}

console.log(randNum());





//დავალება #4

function noName(name){
    console.log(name.length);
}


noName("niko");





//დავალება #5


const currencies = [
	{
		code: "AMD",
		quantity: 1000,
		rateFormated: "6.6742",
		diffFormated: "0.0202",
		rate: 6.6742,
		name: "სომხური დრამი",
		diff: 0.0202,
		date: "2023-07-21T17:45:10.772Z",
		validFromDate: "2023-07-22T00:00:00.000Z",
	},
	{
		code: "EUR",
		quantity: 1,
		rateFormated: "2.8673",
		diffFormated: "0.0131",
		rate: 2.8673,
		name: "ევრო",
		diff: -0.0131,
		date: "2023-07-21T17:45:10.772Z",
		validFromDate: "2023-07-22T00:00:00.000Z",
	},
	{
		code: "GBP",
		quantity: 1,
		rateFormated: "3.3111",
		diffFormated: "0.0046",
		rate: 3.3111,
		name: "დიდი ბრიტანეთის გირვანქა სტერლინგი",
		diff: -0.0046,
		date: "2023-07-21T17:45:10.772Z",
		validFromDate: "2023-07-22T00:00:00.000Z",
	},
	{
		code: "TRY",
		quantity: 1,
		rateFormated: "0.0957",
		diffFormated: "0.0003",
		rate: 0.0957,
		name: "თურქული ლირა",
		diff: 0.0003,
		date: "2023-07-21T17:45:10.772Z",
		validFromDate: "2023-07-22T00:00:00.000Z",
	},

	{
		code: "USD",
		quantity: 1,
		rateFormated: "2.5771",
		diffFormated: "0.0078",
		rate: 2.5771,
		name: "აშშ დოლარი",
		diff: 0.0078,
		date: "2023-07-21T17:45:10.772Z",
		validFromDate: "2023-07-22T00:00:00.000Z",
	},
];

const countryCurrency = currencies.map((el, index, arr) =>{
    return el.rate;
});

const arr = countryCurrency;
const min = Math.min(...arr);
console.log(min);










