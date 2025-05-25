import axios from 'axios';
import type { PokeapiResponse } from '../interfaces/pokeapi-response.interface';


export class Pokemon {
    public readonly id: number;
    public name: string;
    public type: string;


    constructor(id: number, name: string, type: string) {
        this.id = id;
        this.name = name;
        this.type = type;
    }

    get imageUrl(): string {
        return `https://pokemon.com/${this.id}.jpg`;
    }

     async getMoves() {
        const { data } = await axios.get<PokeapiResponse>('https://pokeapi.co/api/v2/pokemon/4');

        return data.moves[0].move.name.toLocaleUpperCase();
    }

}


export const charizard = new Pokemon(1, 'Charizard', 'Fire');

export const charmander = new Pokemon(1, 'Charmander', 'Fire');


let moves = await charmander.getMoves();
console.log(moves);

