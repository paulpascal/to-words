# Number to Words

## Introduction

Converts Numbers (including decimal points) into words . It also converts the numbers into words for currency.

## Installation

```js
npm install with_decimal --save
```

OR

```js
yarn add with_decimal
```

## Usage

```js
let toWords = require('with_decimal');
let words = toWords(123); // words = One Hundred Twenty Three

words = toWords(123.45); // words = One Hundred Twenty Three Point Fourty Five
```

To convert to currency

```js
let toWords = require('with_decimal');
let words = toWords(452, {currency: true, label: 'EUR'}); // words = Four Hundred Fifty Two EUR Only

words = toWords(452.36, {currency: true, label: 'EUR'});  // words = Four Hundred Fifty Two EUR And Thirty Six Only
```
