/* eslint-disable object-curly-spacing */
/* eslint-disable require-jsdoc */
/* eslint-disable max-len */
'use strict';

class ToWords {
  constructor() {
    this.numberWords = [
      { number: 10000000, value: 'Billion' },
      { number: 1000000, value: 'Million' },
      { number: 100000, value: 'Hundred Thousand' },
      { number: 1000, value: 'Thousand' },
      { number: 100, value: 'Hundred' },
      { number: 90, value: 'Ninety' },
      { number: 80, value: 'Eighty' },
      { number: 70, value: 'Seventy' },
      { number: 60, value: 'Sixty' },
      { number: 50, value: 'Fifty' },
      { number: 40, value: 'Forty' },
      { number: 30, value: 'Thirty' },
      { number: 20, value: 'Twenty' },
      { number: 19, value: 'Nineteen' },
      { number: 18, value: 'Eighteen' },
      { number: 17, value: 'Seventeen' },
      { number: 16, value: 'Sixteen' },
      { number: 15, value: 'Fifteen' },
      { number: 14, value: 'Fourteen' },
      { number: 13, value: 'Thirteen' },
      { number: 12, value: 'Twelve' },
      { number: 11, value: 'Eleven' },
      { number: 10, value: 'Ten' },
      { number: 9, value: 'Nine' },
      { number: 8, value: 'Eight' },
      { number: 7, value: 'Seven' },
      { number: 6, value: 'Six' },
      { number: 5, value: 'Five' },
      { number: 4, value: 'Four' },
      { number: 3, value: 'Three' },
      { number: 2, value: 'Two' },
      { number: 1, value: 'One' },
    ];
  }

  convert(number, options = {}) {
    options.currency = (options.currency === true);
    options.currencyLabel = options.currencyLabel;

    const ns = number + '';
    if (ns.includes('.')) {
      if ((ns.match(/\./g) || []).length >= 2) {
        throw new Error('Invalid Number `' + number + '`');
      }
      if (!options.currencyLabel) {
        throw new Error('Invalid option, currencyLabel is required');
      }
      const split = (number + '').split('.');
      return this.convertInternal(split[0], options) +
        (options.currency ? ` ${options.currencyLabel} And ` : ' Point ') +
        this.convertInternal(split[1], options) +
        (options.currency ? ' Only' : '');
    }
    return this.convertInternal(number, options) + (options.currency ? ` ${options.currencyLabel} Only` : '');
  }

  // eslint-disable-next-line require-jsdoc
  convertInternal(number, options = {}) {
    const match = this.numberWords.find((elem) => {
      return number >= elem.number;
    });

    let words = '';
    if (number >= match.number) {
      if (number <= 100) {
        words += match.value;
        number -= match.number;
        if (number > 0) {
          words += ' ' + this.convertInternal(number, options);
        }
      } else {
        const quotient = Math.floor(number / match.number);
        const remainder = number % match.number;
        if (remainder > 0) {
          return this.convertInternal(quotient, options) + ' ' +
            match.value + ' ' + this.convertInternal(remainder, options);
        } else {
          return this.convertInternal(quotient, options) + ' ' + match.value;
        }
      }
    }
    return words;
  }
}

module.exports = ToWords;
