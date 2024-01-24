this.firstName = 'Alan'

const person = {
 firstName: 'Grace',
 lastName: 'Hopper',
 age: 89,
 fullName: function() { return this.firstName + ' ' + this.lastName }
}

let x = person.fullName();
console.log(x);
