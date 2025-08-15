## What is React?
- external library that helps us create website easier
- it lets us work on a small piece of the website at a time
- Main Idea of React
    - we can create our own HTML elements

## React Best Practice
- In React, we should not modify the data directly, we should always create a copy and then modify the copy.
    - this helps React be more efficient
- Do not use the DOM manually
    - React is managing the website

### External Library
- code that is outside our computer
- code that someone else wrote

### React
- shared features

### ReactDOM
- features specific to websites

### Using React to create websites
- load React & ReactDOM

### Using React to create mobile apps
- load React & ReactNative

## React set up
- render = display something
- works on container (convention)
     - keeps thing isolated and organized
     - only affects that container

```js
const container = document.querySelector('.js-container');

ReactDOM.createRoot(container).render('Welcome');
```

## What is Babel?
- javascript compiler
- translates other languages into javascript
- translates JSX into JS

```html
<!-- load babel external lib -->
<script type="text/babel"></script>
```

## JSX
- when using react, we don't use normal js, rather use enhanced version of js
- javascript XML
- same as js, but we can write HTML directly in our js code
- our web browser doesn't understand JSX
- need to translate JSX into JS
- so, we use Babel External Library
- we can insert JS code into JSX element
- JSX is more strict than normal HTML
    - all elements need a closing tag
    - `<input></input>`

```js
const div = (
    <div>
        {2 + 3}
    </div>
);
```

#### Self-closing element
- no codes in between (open, close tags)
```html
<!-- shortcut for <input></input> -->
<input />
```

## Components
- a piece of the website
- the component name must start with a capital letter
     - PascalCase
- component syntax
```js
// ChatInput()
<ChatInput></ChatInput>
```
- fragment (combining multiple elements)
```js
// instead of <div>
<>
    <input />
    <button>Send</button>
</>
```
-components are designed to be reusable

## Props
- parameters in component (function)
- object type
- props = properties
- make our component reusable
```js
function ChatMessage(props) {
    const message = props.message;
    const sender = props.sender
}
```
```js
// shortcut
function ChatMessage({ message, sender }) {}
```

### Array Destructuring
```js
const [a, b] = array;
```

## Key
- helps React track changes in the array
- another prop
- unique for each element

### Unique ID
```js
id: crypto.randomUUID()
```

### Event Handlers
- run a function when we interact with the website

## State
- data that is connected to the HTML
- when we update this data, it will update the HTML

```js
const array = React.useState([{
    name: 'name',
    age
}]);
const currentData = array[0];  // current data
const setData = array[1];  // a function to update the data
```

### Spread Operator
- ...arr
- takes the values from an array, and copies them into a new array

## Updater Function
- if we update the data directly, React will not update the HTML
- if we use function to update the data, React will update the HTML

## onChange
- runs a function when we change the text inside an <input>
- `event.target`
    - gives us the element that we're typing in

## Lifting the State Up
- components are like tree
- we can share data from one component to other
- share state between multiple components

## Controlled Input
- `value` attribute