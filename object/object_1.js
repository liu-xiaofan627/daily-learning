/*
 * @Author: liu.xiaofan 17864297490@163.com
 * @Date: 2023-04-23 22:49:08
 * @LastEditors: liu.xiaofan 17864297490@163.com
 * @LastEditTime: 2023-04-24 00:38:58
 * @FilePath: \study\object\object_1.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
/**
 * 对象访问器属性
 * configurable 是否可以通过delete删除并重新定义，是否可以修改它的特性，是否可以把它改为访问器属性。默认true
 * enumerable 是否可枚举。默认true
 * set 获取函数，默认为undefined
 * get 设置函数，默认为undefined
 */

let book = {
    _year: 2017,
    edition: 1
}
Object.defineProperty(book, 'year', {
    get() {
        return this._year
    },
    set(value) {
        if (value > 2017) {
            this._year = value
            thius.edition += value - 2017
        } else {
            throw new Error("can't set year before 2017")
        }
    }
})

console.log(Object.getOwnPropertyDescriptor(book, 'year'))  // 获取对象中某个属性的描述
console.log(Object.getOwnPropertyDescriptors(book)) // 获取对象中所有属性的描述
