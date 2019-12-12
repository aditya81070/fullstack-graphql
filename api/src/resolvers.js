/**
 * Here are your Resolvers for your Schema. They must match
 * the type definitions in your scheama
 */

const pets = [
  {
    name: 'cheesecake',
    id: 1,
    type: 'golden',
  },
  {
    name: 'cheese',
    id: 2,
    type: 'brown',
  },
  {
    name: 'cheesebook',
    id: 3,
    type: 'white',
  },
  {
    name: 'lora',
    id: 4,
    type: 'golden',
  },
]
module.exports = {
  Query: {
    pets(_, __, ctx) {
      return pets
    },
    pet(_, { input }, ctx) {
      if (input) {
        const { name, type } = input
        return pets.filter(p => p.name.includes(name) && p.type === type)
      }
      return pets
    },
  },
  // Mutation: {

  // // },
  // Pet: {
  //   img(pet) {
  //     return pet.type === 'DOG'
  //       ? 'https://placedog.net/300/300'
  //       : 'http://placekitten.com/300/300'
  //   },
  // },
  // User: {},
}
