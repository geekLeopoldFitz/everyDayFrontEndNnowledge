/*
 * @Author: LeoFitz
 * @Date: 2021-07-29 10:10:11
 * @LastEditTime: 2021-07-30 10:50:23
 * @Description: 创建型：单例模式——面试题实践
 * @FilePath: \everyDayFrontEndNnowledge\july\7.30\singletonMode.js
 */

// 实现Storage，使得该对象为单例，基于 localStorage 进行封装。实现方法 setItem(key,value) 和 getItem(key)。

// 1:实现：静态方法版

class Storage {
    static getInstance() {
        // 判断是否已经new过一个实例
        if (!Storage.instance) {
            // 如果这个实例不存在，则new一个
            Storage.instance = new Storage()
        }
        return Storage.instance
    }
    // 获取localStorage中数据
    getItem(key) {
        return localStorage.getItem(key)
    }
    // 设置localStorage中数据
    setItem(key, value) {
        return localStorage.setItem(key, value)
    }
}

const Storage1 = Storage.getInstance()
const Storage2 = Storage.getInstance()

Storage1.setItem('name', '李雷')
Storage1.getItem('name')

Storage2.getItem('name')

// 返回true
Storage1 === Storage2


// 2: 闭包实现方式
// 先实现一个基础的StorageBase类，把getItem和setItem方法放在它的原型链上
function StorageBase() {}
StorageBase.prototype.getItem = function (key) {
    return localStorage.getItem(key)
}
StorageBase.prototype.setItem = function (key, value) {
    return localStorage.setItem(key, value)
}

// 以闭包的形式创建一个引用自由变量的构造函数
const Storage = (function () {
    let instance = null
    return function () {
        //判断自由变量是否为空
        if (!instance) {
            // 如果是null,则new一个
            instance = new StorageBase()
        }
        return instance
    }
})

// 这里其实不用 new Storage 的形式调用，直接 Storage() 也会有一样的效果 
const storage1 = new Storage()
const storage2 = new Storage()

storage1.setItem('name', '李雷')
// 李雷
storage1.getItem('name')
// 也是李雷
storage2.getItem('name')

// 返回true
storage1 === storage2