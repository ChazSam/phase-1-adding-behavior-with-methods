// Your code here

class Cat {
    constructor(name, sex){
        this.name = name;
        this.sex = sex;
        this.speak = () => {return `${name} says meow!`}
    }
}

class Dog {
    constructor(name, sex){
        console.log(name,sex)
        this.name = name;
        this.sex = sex;
         this.speak = () => {return `${name} says woof!`;} 
    }
}

class Bird {
    constructor(name, sex){
        this.name = name;
        this.sex = sex;
         (sex === "male") ?  this.speak = () => {return `It's me! ${name}, the parrot!`} : this.speak = () => {return `${name} says squawk!`}
    }
}