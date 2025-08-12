## What is React?
- external library that helps us create website easier

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