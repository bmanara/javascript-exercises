const findTheOldest = function(people) {
    const date = new Date();

    people.forEach(person => {
        if ("yearOfDeath" in person) {
            person.age = person.yearOfDeath - person.yearOfBirth;
        }
        else {
            person.age = date.getFullYear() - person.yearOfBirth;
        }
    })

    people.sort((a, b) => b.age - a.age)
    return people[0];
};

// Do not edit below this line
module.exports = findTheOldest;
