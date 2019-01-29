const people = [
    { name: 'Bob', surname: 'L' },
    { name: 'Rob', surname: 'M' },
    { name: 'Ann', surname: 'S' },
]
const Human = function(data) {
    this.name = data.name;
    this.surname = data.surname;
    this.getFullname = () => {
        return `${data.name} ${data.surname}`;
    }
}
const user1 = new Human(people[0]);
console.log(user1.getFullname());

module.exports = user1;