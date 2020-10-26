import { Sorter } from './Sorter';
import { NumbersCollection } from './NumbersCollection';
import { CharactersCollection } from './CharactersCollection';
import { LinkedList } from './LinkedList';

// const numbersCollection = new NumbersCollection([10, 3, -5, 0, 50]);
// const sorter = new Sorter(numbersCollection);
// sorter.sort();
// console.log(sorter.collection.data);

// const charactersCollection = new CharactersCollection('Xaayb');
// const sorter = new Sorter(charactersCollection);
// sorter.sort();
// console.log(sorter.collection.data);

const linkedList = new LinkedList();
linkedList.add(500);
linkedList.add(3);
linkedList.add(-3);
linkedList.add(4);
linkedList.add(40);

const sorter = new Sorter(linkedList);
sorter.sort();
linkedList.print();

// npm start
