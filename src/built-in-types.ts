//--------
// arrays
//--------

let names: string[] = ["Mario", "Luigi", "Peach"];
let ages: number[] = [25, 28, 24];

names.push("Bowser");
ages.push(35);


//----------------------------
// type inference with arrays
//----------------------------

let fruits = ['apple', 'pear', 'banana', 'mango'];
// fruits.push(25)
const f = fruits[3];

let things = [1, true, 'hello'];
const t = things[0];


//-----------------
// object literals
//-----------------

let user: { firstName: string, age: number, id: number; } = {
    firstName: 'mario',
    age: 31,
    id: 1,
    // isFictional: true
};
// user.firstName = true
// user.email = 'ninja@net.dev'


//-------------------------------------
// type inference with object literals
//-------------------------------------

let person = {
    name: 'luigi',
    score: 35
};
// person.name = 25


//-----------
// functions
//-----------

function addTwoNumbers(a: number, b: number): number {
    return a + b;
}

const subtractTwoNumbers = (a: number, b: number): number => {
    return a - b;
};

addTwoNumbers(3, 9);
// addTwoNumbers(3,'9')

function addAllNumbers(items: number[]): void {
    const total = items.reduce((a, c) => a + c, 0);
    console.log(total);
    // return total
}
addAllNumbers([5, 7, 9, 11, 3, 2, 1]);


//-----------------------
// return type inference
//-----------------------

function formatGreeting(name: string, greeting: string) {
    return `${greeting}, ${name}`;
}
const result = formatGreeting('mario', 'hello');


//----------
// any type
//----------

let age: any;
let title;

age = 30;
age = false;
title = 25;
title = { hello: 'world' };


//-------------------
// any type in array
//-------------------

let randomThings: any[] = [null, 25, 'john', undefined];
randomThings.push({ name: 'john' });


//----------------------
// any type in function
//----------------------

function addStuff(value: any): any {
    return value + value;
}
const resultOne = addStuff('hello'); // hellohello
const resultTwo = addStuff(3); // 6


//--------
// tuples
//--------

let human: [string, number, boolean] = ['john', 30, true]; // fixed type order

let hsla: [number, string, string, number];
hsla = [200, '100%', '50%', 1];

let xy: [number, number];
xy = [94.4, 20.1];

function useCoords(): [number, number] {
    const lat = 100;
    const long = 50;

    return [lat, long];
}
const [lat, long] = useCoords();


//--------------
// named tuples
//--------------

let webUser: [name: string, age: number];
webUser = ['ema', 25];
console.log(webUser[0]);


