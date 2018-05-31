// console.log('running')

// const person = {
//   age: 23,
//   location: {
//     city: 'London',
//     temp: 19
//   }
// }

// const { name: alias = 'Anonymous', age } = person

// console.log(`${alias} is ${age}`)

// const { city, temp: temperature } = person.location

// if (city && temperature) {
//   console.log(`It is ${temperature} in ${city}`)
// }

// const book = {
//   title: 'Ego is the Enemy',
//   author: 'Dr. Wiley',
//   publisher: {
//     name: 'Nintendo'
//   }
// }

// const { name: publisherName = 'Self-Published' } = book.publisher

// console.log(publisherName)

// Array destructuring
const address = ['1232 South Street', 'Houston', 'Texas', '92929', 'HS', 'High Population']

const [ , city, state = 'Unknown', ...rest ] = address

console.log(`You are in ${city} within ${state} and with rest ${rest}`)

const item = [ 'Coffee (hot)', '$2.00', '$2.50', '$2.75', 'Coffee (iced)', '$3.00' ]

const [ coffee, , price, , coffeeCold, priceCold ] = item

console.log(`A medium ${coffee} costs ${price}`)
console.log(`A medium ${coffeeCold} costs ${priceCold}`)

