[6th July 2020th](#06072020)  
[7th July 2020th](#07072020)  
[8th July 2020th](#08072020)  
[10th July 2020th](#10072020)  
[14th July 2020](#14072020)  
[5th August  2020](#05082020)  
[10th August  2020](#10082020)  


### 6th July 2020
### 06072020
**Mobile friendly:**  
It's the algorithm which was invented by Google.  

**Mobile friendly test** \
https://search.google.com/test/mobile-friendly  

**Element**  
A set of HTML tags and the contents that are inserted between the tags.  

**Attribute**  
It gives tags some properties.  
If attributes are used, the values are also described.   

**<div>**  
They don't have meaning in paticular.  
Tags of div are used for putting headlines and paragraphs together  

**<span>**  
It is used for decorating to paticular points in sentences.  

**description** \
```HTML
<meta name=description" content="Text information">  
```
It is a short summary of the contents of the page and it is sometimes utilized in case that the page is shown in Google searching.  

**OGP(Open Graph Protocol)**  
It is a gimmick that the title or URL, summary, or eye-catch when a page is shared by SNS.
The descriptions are usually put in meta tags as a set of boilerplate.
```html
<meta property="og:url" content="URL">  
<meta property="og:title" content="the Title">  
<meta property="og:description" content="Summary">  
<meta property="og:image" content="URL of a thumbnail image">  
````
**Alt text**  
Search engine can notrecognize an image if an alt text doesn't exist.

**_blank**  
It'a one of the attributes of tartet and it opens the link in a new tab.  


**Setting a link outside of multiple elements**  
Firstly, the elements are enclosed by comprehensive tags, such as div. Then, the link is attached out of the tags.

**Link to id elements**  
To identify #ID style in the href.  
If the place of the linked file is not the same the page, the path of the file designated at first and the #ID is put after the path.  
  
  
  
___
### 7th July 2020
### 07072020
  

**Label element**  
It uses in a form. It links a name of constituent of the form and input areas.  

**Selector**  
Points to be applied CSS  

**Property**  
To describe how to decorate.  

**Value**  
Degrees of a property.  

**Priority of CSS**  
ID_selector > Class_selector > Type_selector  
If a style is defined in a HTML tag, the style comes before any other styles.  

**Psuedo-class**  
They are CSS classes used to define the state of an element.  
They target elements which can’t be targeted with combinators, or simple selectors like id or class.  
They are utilized to select elements which based on their attributes, states, and relative position.  

**letter-spacing**  
It specifies spaces between letters.  

**Block level**
They can be specified width and height.  
If the width does not defined, it becomes the same width to the parent element.   
You can specify all aspects of margin and padding.  
New lines are inserted around the block.  

Block level tags:
- p
- h1 - h6
- div
- ul
- ol
- li
  
**Inline level**
The width and height values can not be defined. They defined according to the number of words or the size of contents.  
The upside and downside of margin and padding can not be defined.  
Those of left and right side are applicable.  

Inline level tags:
- a
- img
- span
- strong

**Margin**  
The above and below margins offsets each other.  

**Box size**  
Box size = content(width, height) + padding + border + margin.  
  
  box-sizing="border-box":  
  width(padding left + padding right + border left + border right) + margin left + margin right  
=> The left and right padding and left and right border are contained in the value of the width. Then, the both left and right margin are added.  
  
  The difference between context-box and border-box:  
  It is whether the valu of the width contains paddings and borders or not.
  
|                   |content-box|box-sizing|
|-------------------|-----------|----------|
|content            |     o     |     o    |
|property of padding|     x     |     o    |
|property of border |     x     |     o    |
|property of margin |     x     |     x    |
  

**calc function in CSS**  
calc(); is feasible.  e.g. width: calc(100% / 7);  padding calc(1em - 5px);  


**Flex box(Flexible Box Layout Module)**  
It's a one of the functions of CSS and it provides flexible layout, such as horizontal.  
  
**Position property**  
It is a fucnction which controls display positions. The element is inserted according to stuructures of HTML.  
  

8th July 2020
### 08072020

**Cursor**  
It is property of CSS which specifies the type of mouse cursor.  

10th July 2020
### 10072020

**Link check service**  
To check if the site contains link disconnection.  
https://validator.w3.org/checklink  

**HTML syntax check service**  
https://validator.w3.org/  

**CSS syntax check service**  
https://jigsaw.w3.org/css-validator/

14th July 2020
### 14072020
**Shortcut of Google developer tool**  
alt click on elements : Expand recursively  


[5th August  2020](#05082020)  
### 05082020

*****Generator

  ```javascript
function* generator() {
  yield 1;
  yield 2;
  yield 3;
}

const gen = generator(); // "Generator { }"

```
```javascript
function* infinite() {
    let index = 0;

    while (true) {
        yield index++;
    }
}

const generator = infinite(); // "Generator { }"

console.log(generator.next().value); // 0
console.log(generator.next().value); // 1
console.log(generator.next().value); // 2
```

**Birateral communication**
```javascript
function* interrogate() {
  const name = yield `お名前は？`;
  const color = yield "お好きな色は何ですか？";
  return `#{name}さんの好きな色は${color}だそうですよ。`;
}

const it interrogate();
console.log(it.next());

console.log(int.next("Mike"));
    //{value:`お好きな色はなんですか？`}
console.log(it.next(`green`));
// value: ``Mikeさんの好きな色はgreenだそうですよ。`, done: true}
```

**this of arrow function**
```javascript

const annoyer = {
  phrases: [`A`, `B`, `C`, `D`],
  pickPhrase() {
    const { phrases } = this;
    const idx = Math.floor(Math.random() * phrases.length);
    return phrases[idx]
  },
  start() {
    setInterval(function () {
      console.log(this); // => Window
      console.log(this.pickPhrase);
    }, 3000);
  }
}
annoyer.start();
```
The start() must be written by arrow function.  

```javascript
const annoyer = {
  phrases: [`A`, `B`, `C`, `D`],
  pickPhrase() {
    const { phrases } = this;
    const idx = Math.floor(Math.random() * phrases.length);
    return phrases[idx]
  },
  start() {
    setInterval(() => {
      console.log(this); // => annoyer
      console.log(this.pickPhrase());
    }, 3000);
  }
}
annoyer.start();

annoyer.start();
```

### #10082020  
**To encapsulate in JavaScript**
```javascript
class Car {
  constructor(make, model) {
    this.make = make; /* メーカー */
    this.model = model; /* モデル */
    this._userGears = ['P', 'N', 'R', 'D'];
    this._userGear = this._userGears[0];
  }
  
  get userGear() {
    console.log(`getter START`);
    return this._userGear; 
  }
  set userGear(value) { 
    console.log(`SETTER START`);
    this._userGear = value; 
  }
  
  shift(gear) { this.userGear = gear; }
}

const car1 = new Car("Tesla", "Model S");
const car2 = new Car("Mazda", "3i");
console.log(car1);
/* 実行結果
Car {
  make: 'Tesla',
  model: 'Model S',
  _userGears: [ 'P', 'N', 'R', 'D' ],
  _userGear: 'P' }
*/
console.log(car2);
/* 実行結果
Car {
  make: 'Mazda',
  model: '3i',
  _userGears: [ 'P', 'N', 'R', 'D' ],
  _userGear: 'P' }
*/
// #@@range_end(list2)

// #@@range_begin(list3)
car1.shift('D');
car2.shift('R');

console.log(car1.userGear); // D
console.log(car2.userGear); // R

car1.userGear = "X"; // Error: ギア指定が正しくない：X  
// #@@range_end(list3)

```  
  
**Immutable.js in Browser**
```javascript
<script src="https://cdnjs.cloudflare.com/ajax/libs/immutable/3.8.2/immutable.min.js" integrity="sha512-myCdDiGJRYrvRb/VuJ67ljifYTJdc1jdEvL4c4ftX9o3N6EAnmD83c/7l2/91RCINZ7c8w21tiXDT7RDFjdc3g==" crossorigin="anonymous"></script>

  //Immutable.js
  const natural = Immutable.Range();
  const natural10 = natural.take(10);
  console.log(natural10.toArray());
  ```


  **Input event**
  How to organize many types of input data.  
  ```javascript
const input = document.querySelector('#');
const checkbox = document.querySelector('#');
const select = document.querySelector('#');
const formData = {};

for (let input of [ input, checkbox, select ]) {
	input.addEventListener('input', ({ target }) => {
		const { name, type, value, checked } = target;
		formData[name] = type === 'checkbox' ? checked : value;
		console.log(formData);
	});
}
```