export const pokemonsIds = [1, 2, 3, 50, 30]


interface Pokemon {
    id: number
    name: string
    img: string,
    age?: number
}

export const charmander: Pokemon = {
    id: 1,
    name: 'Charmander',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeVFNKUT6OcGKlCRlHkyDawCkLEX4fPpQsEw&s'
}

export const pokemons: Pokemon[] = []

pokemons.push(charmander)