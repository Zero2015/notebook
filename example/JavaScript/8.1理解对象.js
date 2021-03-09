
// 对象是一种无序集合的数据类型
// 对象的每个属性或方法都由一个名称来标识，这个名称映射到一个值

// 两种创建方式是等价的

// 创建对象的两种方式
// 创建Object实例，在实例上添加属性和方法
let person = new Object();
person.name = 'Zero';
person.age = 18;
person.job = 'programmer';
person.plans = undefined;
person.sayName = function(){
    console.log(this.name)
}

// 字面量方式创建
let person1 = {
    name: 'Zero',
    age: 18,
    job: 'programmer',
    plans: "",
    sayName: function(){
        console.log(this.name)
    }
}

console.log(person, person1)

// 属性的类型分为 数据属性 和 访问器属性

// 
console.log(Object.getOwnPropertyDescriptors(person))


// 数据属性
// Object.defineProperty(person, 'name', {
//     writable: false,
// })

// delete person.name;

// person.name = 'zero'
// console.log(person.name)

