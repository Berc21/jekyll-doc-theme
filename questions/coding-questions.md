--- 
layout: default 
title: Coding Question
permalink: /coding-questions/ 
---

# Coding Questions:

## Question: 1
 *What is the value of `foo`?*
```javascript
var foo = 10 + '20';
```

## Question: 2
 *What will be the output of the code below?*
```javascript
console.log(0.1 + 0.2 == 0.3);
```

## *Question: How would you make this work?*
```javascript
add(2, 5); // 7
add(2)(5); // 7
```

## *Question: What value is returned from the following statement?*
```javascript
"i'm a lasagna hog".split("").reverse().join("");
```

## *Question: What is the value of `window.foo`?*
```javascript
( window.foo || ( window.foo = "bar" ) );
```

## *Question: What is the outcome of the two alerts below?*
```javascript
var foo = "Hello";
(function() {
  var bar = " World";
  alert(foo + bar);
})();
alert(foo + bar);
```

## *Question: What is the value of `foo.length`?*
```javascript
var foo = [];
foo.push(1);
foo.push(2);
```

## *Question: What is the value of `foo.x`?*
```javascript
var foo = {n: 1};
var bar = foo;
foo.x = foo = {n: 2};
```

## *Question: What does the following code print?*
```javascript
console.log('one');
setTimeout(function() {
  console.log('two');
}, 0);
console.log('three');
```

## *Question: What is the difference between these four promises?*
```javascript
doSomething().then(function () {
  return doSomethingElse();
});

doSomething().then(function () {
  doSomethingElse();
});

doSomething().then(doSomethingElse());

doSomething().then(doSomethingElse);
```
