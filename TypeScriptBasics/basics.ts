//primitives: number, string, boolean

let age: number;

age = 12;

let userName: string;

userName =  'Urmi';

let isStudent: boolean;

isStudent = true;

//Complex types: arrays, objects

let hobbies: string[];

hobbies = ['Treaking', 'Reading', 'Cooking'];

type Person = {name: string, age: number}

let person: Person;

person = {
    name: 'Urmi',
    age: 23
}

let people: Person[];

people = [
    {
    name: 'Urmi',
    age: 23
    },
    {
    name: 'Patel',
    age: 24
    }
]

//type inference 

let course: string | number = 'React -The Complete Guide';

course = 12345;

//Function & types, parameters

function addition(a: number, b: number){
    return a + b;
}

function Output(value: any){
    console.log(value);
}

// Generics

function insertAtBeginning<T>(array: T[], value: T){
    const newArray = [value, ...array];
    return newArray;
}

const demoArray = [ 1, 2, 3 ];

const updatedArray = insertAtBeginning(demoArray, -1); //[-1, 1, 2, 3]
const stringArray = insertAtBeginning(['a', 'b', 'c'], 'd')

//updatedArray[0].split('');
//stringArray[0].split('');