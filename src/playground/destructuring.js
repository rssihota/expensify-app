// const person = {
//     name: 'Ranbir',
//     age: 25,
//     location: {
//         city: "Mississauga",
//         temp: 40
//     }
// };

// // const name = person.name;
// // const age = person.age;

// const { name = 'Anonymous' , age } = person;

// console.log(`${name} is ${age}.`)

// const { city, temp: temperature } = person.location;

// if (city && temperature) {
//     console.log(`It's ${temperature} in ${city}`);    
// }

const book = {
    title: 'Ego is the Enemy',
    author: 'Ryan Holiday',
    publisher: {
        name: 'Penguin'
    }
};

const { name : publisherName = 'Self-Published' } = book.publisher;

console.log(publisherName);
