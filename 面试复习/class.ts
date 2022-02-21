/* class Animal {
    public name;    
    constructor(name) {
        this.name = name;
    };
    sayHi() {
        return `My name is ${this.name}`;
    }
}


class Cat extends Animal {
    constructor(name) {
        super(name); // 调用父类的constructor(name)
        console.log(this.name)
    }
    sayHi() {
        return 'neow, ' + super.sayHi(); // 调用父类的sayHi()
    }
}

let c = new Cat('Tom'); // Tom
console.log(c.sayHi()); // Meow, My name is Tom */

// 存取器
/* class Animal {
    constructor(name) {
      this.name = name;
    }
    get name() {
      return 'Jack';
    }
    set name(value) {
      console.log('setter: ' + value);
    }
  }
  
  let a = new Animal('Kitty'); // setter: Kitty
  a.name = 'Tom'; // setter: Tom
  console.log(a.name); // Jack */

  // 静态方法---关键词static
  /* class Animal {
    static isAnimal(a) {
      return a instanceof Animal;
    }
  }
  
  let a = new Animal('Jack');
  Animal.isAnimal(a); // true
//    a.isAnimal(a); // TypeError: a.isAnimal is not a function */

/* class Animal {
    static name = 'jack';
    constructor() {
        console.log(2233);
    }
}
console.log(Animal.name); */
/* 
abstract class Animal {
    public name;
    public constructor(name) {
        this.name = name;
    }
    public abstract sayHi();
}
class Cat extends Animal {
    public sayHi() {
        console.log(`neow, my name is ${this.name}`);
    }
}
let cat = new Cat('tom')
cat.sayHi() */

/* interface Alarm {
    alert(): void;
}
class Door {}
class SecurityDoor extends Door implements Alarm {
    alert(): void {
        console.log('securityDoor alert')
    }
}

class Car implements Alarm {
    alert(): void {
        console.log('car alert')
    }
} */
/* 
interface Alarm {
    alert(): void;
}

interface Light {
    lightOn(): void;
    lightOff(): void;
}

class Car implements Alarm, Light {
    alert() {
        console.log('Car alert');
    }
    lightOn() {
        console.log('Car light on');
    }
    lightOff() {
        console.log('Car light off');
    }
} */

function createArray<T>(length: number, value: T): Array<T> {
    let result: T[] = [];
    for (let i = 0; i < length; i++) {
        result[i] = value;
    }
    return result;
}

console.log(createArray<string>(3, 'x')); // ['x', 'x', 'x']