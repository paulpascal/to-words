# Number to Words

## Introduction

Converts Numbers (including decimal points) into words . It also converts the numbers into words for currency.

## Installation

```js
npm install to-words --save
```

OR

```js
yarn add to-words
```


## Usage

```js
let toWords = require('to-words');
let words = toWords(123); // words = One Hundred Twenty Three

words = toWords(123.45); // words = One Hundred Twenty Three Point Fourty Five
```

To convert to currency

```js
let toWords = require('to-words');
let words = toWords(452, {currency: true, label: 'EUR'}); // words = Four Hundred Fifty Two EUR Only

words = toWords(452.36, {currency: true, label: 'EUR'}); // words = Four Hundred Fifty Two EUR And Thirty Six Only
```
