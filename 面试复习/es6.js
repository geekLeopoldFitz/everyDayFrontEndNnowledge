// 结构赋值
// const { a, b, c, d, e } = obj || {};
// console.log(a)

let { bar, foo } = { foo: 'aaa', bar: 'bbb' };
console.log(foo) // "aaa"
console.log(bar) // "bbb"

// 合并数据

// 原始写法，后边是改进方式，使用es6
const a = [1, 2, 3],
    b = [1, 5, 6],
    c = a.concat(b);
console.log(c)

const obj1 = {a: 1},
    obj2 = {b: 1},
    obj =Object.assign(obj1, obj2)
console.log(obj)

// 改进方法，同时使用set进行了去重

const a = [1, 2, 3],
    b = [1, 5, 6],
    c = [...new Set([...a, ...b])];
console.log(c)