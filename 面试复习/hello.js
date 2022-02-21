/* function sayHello(person: string) {
    if (typeof person === 'string') {
        return 'Hello, ' + person;
    } else {
        throw new Error('person is not a string');
    }
}

let user = 'Tom';
console.log(sayHello(user)); */
// let decLiteral: number = 6;
// let hexLiteral: number = 0xf00d;
// // ES6 中的二进制表示法
// let binaryLiteral: number = 0b1010;
// // ES6 中的八进制表示法
// let octalLiteral: number = 0o744;
// let notANumber: number = NaN;
// let infinityNumber: number = Infinity;
// let something: any;
// something = 'liyao';
// something = 7;
// console.log(something)
// interface Person {
//     name: string;
//     age: number;
// }
// let tom: Person = {
//     name: 'tom',
//     age: 25
// }
// function toBoolean(something: any): boolean {
//     return Boolean(something);
// }
// console.log(toBoolean(1))
// let b: Boolean = new Boolean(1);
// let e: Error = new Error('Error occurred');
// let d: Date = new Date();
// let r: RegExp = /[a-z]/;
// type Name = string;
// type NameResolver = () => string;
// type nameOrResolver = Name | NameResolver;
// function getName(n: nameOrResolver): Name {
//     if(typeof n === 'string') {
//         return n;
//     } else {
//         return n();
//     }
// }
// let tom!: [string, number];
// tom = ['jack', 15];
// tom[0] = 'tom';
// tom[1] = 123;
// console.log(tom[0].slice(1));
// console.log(tom[1].toFixed(2));
var Animal = /** @class */ (function () {
    function Animal(name) {
        this.name = name;
    }
    ;
    Animal.prototype.sayHi = function () {
        return "My name is ".concat(this.name);
    };
    return Animal;
}());
var a = new Animal('jack');
console.log(a.sayHi());
