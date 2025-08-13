## What is React?
- external library that helps us create website easier
- it lets us work on a small piece of the website at a time
- Main Idea of React
    - we can create our own HTML elements

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
```html
<!-- shortcut for <input></input> -->
<input />
```

## Components
- a piece of the website
- the component name must start with a capital letter
     - pascalCase
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

### key
- helps React track changes in the array
- another prop