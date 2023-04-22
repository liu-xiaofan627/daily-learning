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

// 修改name为不可枚举, object相关方法中则不会显示name
Object.defineProperty(person, 'name', {
    enumerable: false
})
// console.log(Object.entries(person));
for (let key in person) {
    // console.log(key)
}

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