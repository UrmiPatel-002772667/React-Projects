//primitives: number, string, boolean
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var age;
age = 12;
var userName;
userName = 'Urmi';
var isStudent;
isStudent = true;
//Complex types: arrays, objects
var hobbies;
hobbies = ['Treaking', 'Reading', 'Cooking'];
var person;
person = {
    name: 'Urmi',
    age: 23
};
var people;
people = [
    {
        name: 'Urmi',
        age: 23
    },
    {
        name: 'Patel',
        age: 24
    }
];
//type inference 
var course = 'React -The Complete Guide';
course = 12345;
//Function & types, parameters
function addition(a, b) {
    return a + b;
}
function Output(value) {
    console.log(value);
}
// Generics
function insertAtBeginning(array, value) {
    var newArray = __spreadArray([value], array, true);
    return newArray;
}
var demoArray = [1, 2, 3];
var updatedArray = insertAtBeginning(demoArray, -1); //[-1, 1, 2, 3]
var stringArray = insertAtBeginning(['a', 'b', 'c'], 'd');

//updatedArray[0].split('');
//stringArray[0].split('');
