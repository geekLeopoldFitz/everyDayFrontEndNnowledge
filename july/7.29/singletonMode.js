/*
 * @Author: LeoFitz
 * @Date: 2021-07-29 10:10:11
 * @LastEditTime: 2021-07-29 11:21:40
 * @Description: 创建型：单例模式——Vuex的数据管理哲学
 * @FilePath: \everyDayFrontEndNnowledge\july\7.29\singletonMode.js
 */
// 1：判断自己是否已经创建过一个实例
class SingleDog {
    show() {
        console.log('我是一个单例对象')
    }
    static getInstance() {
        // 判断是否已经new过一个实例
        if (!SingleDog.instance) {
            // 如果这个实例不存在，那么先创建它
            SingleDog.instance = new SingleDog()
        }
        return SingleDog.instance
    }
}

const S1 = new SingleDog.getInstance()
const S2 = new SingleDog.getInstance()

// 测试判断两个实例对象是否一致
console.log(S1 === S2)

//  2：闭包写法

SingleDog.getInstance = (function () {
    // 定义自由变量instance，模拟私有变量
    let instance = null
    return function () {
        // 判断自由变量是否为null
        if (!instance) {
            // 如果为null则new出唯一实例
            instance = new SingleDog()
        }
        return instance
    }
})()

// 3：生产实践：Vuex中的单例模式

let Vue // 这个Vue的作用和楼上的instance作用一样

export function install(_Vue) {
    // 判断传入的Vue实例对象是否已经被install过Vuex插件（是否有了唯一的state）
    if (Vue && _Vue === Vue) {
        if (process.env.NODE_ENV !== 'production') {
            console.error(
                '[vuex] already installed. Vue.use(Vuex) should be called only once.'
            )
        }
        return
    }
    // 若没有，则为这个Vue实例对象install一个唯一的Vuex
    Vue = _Vue
    // 将Vuex的初始化逻辑写进Vue的钩子函数里
    applyMixin(Vue)
}