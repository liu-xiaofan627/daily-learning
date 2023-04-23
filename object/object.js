/*
 * @Author: liu.xiaofan 17864297490@163.com
 * @Date: 2023-04-22 15:52:37
 * @LastEditors: liu.xiaofan 17864297490@163.com
 * @LastEditTime: 2023-04-23 22:35:24
 * @FilePath: \study\object\object.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
"use strict"

let person = {
    // 数据属性
    name: '张三',
    age: '19',
    role: 'student',
    getName() {
        console.log(this.name)
    }
}

/**
 * 数据属性
 * configurable 是否可以通过delete删除并重新定义，是否可以修改它的特性，是否可以把它改为访问器属性。默认true
 * enumerable 是否可枚举。默认true
 * writable: 是否可以被修改。默认true
 */

// 通过Object.defineproperty()可以修改、添加对象属性
function enumerableChange() {
    Object.defineProperty(person, 'name', {
        enumerable: false
    })
    console.log(Object.entries(person));
    for (let key in person) {
        console.log(key)
    }
}
// enumerableChange()

function configurableChange() {
    // configurable修改为false
    Object.defineProperty(person, 'role', {
        configurable: false
    })
    try {
        delete person.role // 严格模式下抛出异常
    } catch (error) {
        console.log(error);
    }
    try {
        // configurable修改为false之后将不再可进行修改, 报异常
        Object.defineProperty(person, 'role', {
            configurable: true
        })
    } catch (error) {
        console.log(error);
    }
}
// configurableChange()

function writableChange() {
    Object.defineProperty(person, 'age', {
        writable: false
    })

    try {
        person.age = 100 // 不可修改，报错
    } catch (error) {
        console.log(person.age)
    }
}
writableChange()