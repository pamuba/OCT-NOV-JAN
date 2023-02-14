let dragon = {
    name:"Tanya",
    fire:true,
    fight(){
        return 9;
    },
    sing(){
        if(this.fire) return `I am ${this.name}, the breather of fire`
    }
};

let lizard = {
    name : "kiki",
    fire:true,
    fight(){
        return 1;
    }
}

// we can borrow the sing method for lizard using bind
const singLizard = dragon.sing.bind(lizard)
// //2 days
console.log(singLizard())

//I want to tell the lizard should inherit all the properties
//and methods of the above class
// lizard.__proto__ = dragon
// console.log(lizard.sing())
// console.log(lizard.fire)
// console.log(lizard.fight())