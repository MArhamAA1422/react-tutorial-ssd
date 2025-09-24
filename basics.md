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

```jsx
<img src={`images/img-${value*10}`} />
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
- components are designed to be reusable

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
- another prop or HTML attribute
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

```js
setData(newData);
```

- state doesn't update immediately
- state is updated after all of the code is finished

### Spread Operator
- `...arr`
- takes the values from an array, and copies them into a new array

## Updater Function
- if we update the data directly, React will not update the HTML
- if we use function to update the data, React will update the HTML

## onChange
- runs a function when we change the text inside an `<input>`
- `event.target`
    - gives us the element that we're typing in

## Lifting the State Up
- components are like tree
- we can share data from one component to other
- share state between multiple components

## Controlled Input
- `value` attribute in HTML

## Promise
- a value that is not available yet, but will be available in the future

## CSS with React
- To set a class attribute
    - React is JS code
    - JS already has a feature called `class`
    - `class` is a reserved word
    - so we use `className`
- vh = viewport height
    - the height of the browser
    - move something in the bottom of the page
    - `100vh` = 100% of the height of the browser
- To use Flexbox (or others similar)
    - create container around elements
- scrollable content
```css
/* CSS */
overflow: scroll;
```

## Hooks
- insert React features into our component
- ```React.useState()``` is a hook
- every hook starts with the word __use__
    - React hooks `useState(), useEffect(), useRef()`
- put hooks at the top of the component
- hooks should not be inside anything (block): `if` `function`

## useEffect
- run some code after the component is crated or updated
- it shouldn't return any Promise
    - `async` functions return promises, so put them inside another function inside
```js
React.useEffect(() => {
    console.log('updated');
}, [chatMessages]);  // second parameter: dependency array
```

## Dependency array
- control when useEffect runs
- if empty: only run once, after the component is created
- Best Practice
    - give useEffect a dependency array to avoid running too often
    - at least `[]`

## useRef
- automatically save an HTML element from the component
- `ref`
    - container with special React features
```js
const containerRef = React.useRef(null);
```
```JSX
<div className="container"
    ref={containerRef}>
```

### `containerElem` (variable) contains `Elem`
- so it means it contains HTML

## Custom Hooks
- inside a custom hook, we just use a combination of other hooks
- make one feature a custom hook, so we can easily add this feature to other components
- hook functions must start with `use`
```js
function useAutoScroll(dependencies) {
    const containerRef = React.useRef(null);

    React.useEffect(() => {
        const containerElem = containerRef.current;
        if (containerElem) {
            containerElem.scrollTop = containerElem.scrollHeight;
        }
    }, [dependencies]);

    return containerRef;
}
```

## Command line
- working directory
- filepath
- pwd: print working directory
- node
    - lets us run js code outside of a browser
- npm
    - lets us install external libraries (or packages) into our project
- `crete-vite`
    - package
    - helps us set up a new React project
    - to use: install + run
        - `npx crete-vite@version`
- `npm install`
    - set up node_modules
- `npm run dev`

## React project setup with vite
- __public__ folder
    - contains files that should be available to the public
    - we can access these using a URL
    - src `images/`, then vite will look for this in public folder
- __eslint__
    - highlights problems in our JS code
- index.html
    - main HTML code for the project
- npm auto updates `package-lock.json`, `package.json`
- __vite__
    - a tool to setup the React project
    - helps us build the website, loads JS, CSS into HTML
    - vite also creates a server (a server puts our website at a URL)
    - lets us import any type of file (CSS, img, external lib)
- Main focus: `index.html`, `src` folder
- `main.jsx`: sets up React
- `<StrictMode>` = gives us some additional checks and warning when developing our app
- anything in `components/` should be shared
- multiple components
    - group them together into a folder
- Best Practice
    - Load external libraries from node_modules instead of using a <script> tag

## Export
- named export
```js
import { a, b } from src
```
- default export
    - at a time one item
```js
import a from src
```

## Routing
- create multiple pages in React
- routing lets us crate multiple pages using 1 HTML file
- lets us reusing our HTML code
- `<Routes>` tells React all the pages are in our website
```jsx
// main.jsx
import { BrowserRouter } from 'react-router';
<BrowserRouter>
    <App />
</BrowserRouter>
```
```jsx
// App.jsx
import { Routes, Route } from 'react-router';
<Routes>
    <Route path="/" element={<HomePage />} />
</Routes>

// instead of path="/" we can also write: index
```

## SPA
- single page application
- we only have 1 HTML file
- we use React to create multiple pages

## Link
- go to another page **without reloading**
    - faster, smooth
- better alternative of `<a>` in HTML
    - `<a>` reloads page each time
```jsx
import { Link } from 'react-router';
<Link to="/"></Link>
```
- when using react-router use `<Link>`

## NavLink
- useful for navigation links (in header)
- it knows which page is loaded
- if we are in Orders page, it adds a class called __active__ to the Orders link (`className="orders-link ... active`)
- we can then style
```css
.orders-link.active {
    text-decoration: underline;
}
```

## Backend
- share, store the data
- `.json()` gives us the data attached to the response
- `response.json()` is also asynchronous
- `/api` these URL paths are for interacting with the backend
- `<StrictMode>` runs code twice (two output in useEffect)
- backend does most of the necessary calculations

## axios
- npm package
- cleaner way to make request to the backend

## server-proxy
- vite.config.js
- no need to write 'http://localhost:3000' each time, the URL path starts with '/api' the request will automatically goes to the target
```js
server: {
    proxy: {
        '/api': {
            target: 'http://localhost:3000'
        }
    }
}
```

## base
```html
<!-- adds '/' in front of any relative URLs -->
<base href="/" />
```

#### We should use `async await` with React

## URL parameters
`tracking/:orderId/:productId`, we can replace them with any text.

To get these values out of the URL, we can use hook: `useParams` from react-router.

## Data Mutation
Update data in the backend

### POST method
`axios.post('URL', REQUEST_BODY_OBJECT)`