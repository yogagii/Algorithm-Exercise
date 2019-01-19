function createPerson(name, age) {
	//获取fn参数的数量
	var o = new Object;
	o.name = name;
	o.age = age;
	return o
}

function Person(name) {
	this.name = name;
}

Person.prototype.sayName = function() {
	console.log(this.name)
}
Person.prototype.age = 20

function Student() {
	this.school = '向阳'
}
Student.prototype = new Person('Yoga')
Student.prototype.major = 'math'

var student1 = new Student()
console.log('**********************')
console.log(student1)
console.log(student1.__proto__)
console.log(student1.major)
console.log(student1.school)

var person1 = createPerson("Peter", 20)
console.log(person1.constructor)
console.log(person1.__proto__)
console.log(person1)

var person2 = new Person("Tom", 20)
console.log(person2.constructor)
console.log(person2.__proto__)
console.log(person2)

console.log('person2.constructor == Person')
console.log(person2.constructor == Person)
console.log('person2.constructor == Object')
console.log(person2.constructor == Object)
console.log('person1.constructor == Object')
console.log(person1.constructor == Object)
console.log('person2 instanceof Person')
console.log(person2 instanceof Person)
console.log('person2 instanceof Object')
console.log(person2 instanceof Object)
console.log('person1 instanceof Object')
console.log(person1 instanceof Object)

function iterate1(obj) {
	return Object.keys(obj).map(function(key) {
		return key + ": " + obj[key];
	});
}

function iterate2(obj) {
	const res = [];
	for(var prop in obj) {
		/*if (obj.hasOwnProperty(prop)) {*/
		res.push(prop + ": " + obj[prop]);
		/* }*/
	}
	return res;
}

function iterate3(obj) {
	return Object.getOwnPropertyNames(obj).map(function(key) {
		return key + ": " + obj[key];
	});
}

console.log(iterate1(student1))
console.log(iterate2(student1))
console.log(iterate3(student1))

function A() {
	this.age = 1
}
var a = new A()
A.prototype.getName = function() {
	return this.name
}
A.prototype.name = 'Alice'
var mingzi = a.getName()
console.log(a)
console.log(mingzi)