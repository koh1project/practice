import { Sorter } from './Sorter';
import { NumbersCollection } from './NumbersCollection';
import { CharactersCollection } from "./CharactersCollection";

// const numbersCollection = new NumbersCollection([10, 3, -5, 0, 50]);
// const sorter = new Sorter(numbersCollection);
// sorter.sort();
// console.log(sorter.collection.data);

const charactersCollection  = new CharactersCollection('Xaayb');
const sorter = new Sorter(charactersCollection);
sorter.sort();
console.log(sorter.collection.data);

// npm start