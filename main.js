const people = [
  { name: 'John', age: 25, occupation: 'Software Engineer', graduateIn: 2016 },
  {
    name: 'Kimberly',
    age: 27,
    occupation: 'Financial Consultant',
    graduateIn: 2014,
  },
  { name: 'Terrance', age: 23, occupation: 'Accountant', graduateIn: 2020 },
  { name: 'Darius', age: 50, occupation: 'Civil Engineer', graduateIn: 1997 },
  { name: 'Jane', age: 44, occupation: 'Eletrical Engineer', graduateIn: 1999 },
  {
    name: 'Michael',
    age: 30,
    occupation: 'Software Engineer',
    graduateIn: 2010,
  },
  { name: 'Alan', age: 25, occupation: 'Civil Engineer', graduateIn: 2018 },
  {
    name: 'Brandon',
    age: 27,
    occupation: 'Software Engineer',
    graduateIn: 2015,
  },
  {
    name: 'Christopher',
    age: 53,
    occupation: 'Eletrical Engineer',
    graduateIn: 1989,
  },
  { name: 'Sean', age: 40, occupation: 'Accountant', graduateIn: 1999 },
]

/// forloop ///
// for (let i = 0; i < people.length; i++) {
//   // console.log(people[i])
//   console.log(`Name: ${people[i].name} | Occupation: ${people[i].occupation}`)
// }

/// forEach ///
// people.forEach((person) =>
// // console.log(person)
// console.log(`Name: ${person.name} | Occupation: ${person.occupation}`)
// )

/// filter ///

// Filtered group of people ages under 30

// normal way
// let underThirty = []
// for (let i = 0; i < people.length; i++) {
//   if (people[i].age <= 30) {
//     underThirty.push(people[i])
//   }
// }

// const underThirty = people.filter((person) => person.age <= 30)
// console.log(underThirty)

// Filter group of people occupation is Software Engineer

// const softwarePeople = people.filter(
//   (person) => person.occupation === 'Software Engineer'
// )
// console.log(softwarePeople)

// Filter group of people who gruduated before 2000

// const graduatedBeforeTwenties = people.filter(
//   (person) => person.graduateIn <= 2000
// )
// console.log(graduatedBeforeTwenties)

/// map - creation ///

// Get an array of name

// const name = people.map((person) => person.name)
// console.log(name)

// Get an array with objects consist of name and occupation

// const nameAndOccupation = people.map((person,index) => ({
//   index,
//   name: person.name,
//   age: person.age,
//   occupation: person.occupation,
// }))

// console.log(nameAndOccupation)

// // Get an array of all ages times 2
// const agesTimesTwo = people.map((person) => person.age * 2)
// console.log(agesTimesTwo)

// // Get an array of all ages square root
// const agesSquare = people.map((person) => Math.sqrt(person.age))
// console.log(agesSquare)

// // Get an array of all ages square root and times 2
// const agesMap = people
//   .map((person) => Math.sqrt(person.age))
//   .map((person) => person * 2)

// console.log(agesMap)

// sort //
// for loop's way
// let sortedAge = []
// for (let i = 0; i < people.length; i++) {
//   for (let y = i + 1; y < people.length; y++) {
//     let temp = 0
//     if (people[i].age < people[y].age) {
//       temp = people[i]
//       people[i] = people[y]
//       people[y] = temp
//     }
//   }
//   sortedAge.push(people[i])
// }

// console.log(sortedAge) //desc

// // sort's way //
// const sortedAges = people.sort((person) => person.age) // not working
// // use this instead  //
// const sortAges = people.sort((a, b) => b.age - a.age) //desc
// console.log(sortedAges)

// reduce //

// Get total people's age

// let ageSum = 0
// for (let i = 0; i < people.length; i++) {
//   ageSum += people[i].age
// }

// const ageSum = people.reduce((total, person) => total + person.age, 0)
// console.log(ageSum)

/// Combined Methods ///
const combinedMethods = people
  .map((person) => person.age * 2)
  .filter((age) => age >= 60)
  .sort((a, b) => b - a)
  .reduce((total, person) => total + person, 0)

console.log(combinedMethods)
