import { Sorter } from './Sorter';
import { NumbersCollection } from './NumbersCollection';
import { CharactersCollection } from './CharactersCollection';
import { LinkedList } from './LinkedList';

const numbersCollection = new NumbersCollection([10, 3, -5, 0, 50]);
numbersCollection.sort();
console.log(numbersCollection.data);


const charactersCollection = new CharactersCollection('Xaayb');
charactersCollection.sort();
console.log(charactersCollection.data);

const linkedList = new LinkedList();
linkedList.add(500);
linkedList.add(3);
linkedList.add(-3);
linkedList.add(4);
linkedList.add(40);

linkedList.sort();
linkedList.print();

// npm start
