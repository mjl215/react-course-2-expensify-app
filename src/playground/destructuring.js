// OBJECT DESTRUCT

// const person = {
//   name: 'mike',
//   age: 27,
//   location: {
//     city: 'phili',
//     temp: 91
//   }
// };

// const { name: firstName = 'anon', age } = person;

// console.log(`${firstName} is ${age}`)


// const { city, temp: temperature } = person.location;
// if (city && temperature) {
//   console.log(`${temperature} in ${city}`);
// }

// const book = {
//   title: 'Ego is the Enemy',
//   author: 'Ryan Holiday',
//   publisher: {
//     name: 'Penguin'
//   }
// };

// const { name: publisherName = 'Self-Published' } = book.publisher;

// console.log(publisherName);

//ARRAY DESTR

// const address = ['1299 S Juniper Street', 'Philadelphia', 'Pennsyvania', '19147'];

// const [, city, state = 'New York'] = address;

// console.log(`you are in ${city}, ${state}`);

const item = ['Coffee (hot)', '$2', '$2.50', '$2.75'];

const [itemName, , med] = item;

console.log(`A medium ${itemName} costs ${med}`)