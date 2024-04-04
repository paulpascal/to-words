const toWords = require('../index');

describe('toWords', () => {
  test(`minor test`, () => {
    expect(() => toWords(123).toEqual('One Hundred Twenty Three'));
    expect(() => toWords(123.45).toEqual('One Hundred Twenty Three Point Fourty Five'));
  });

  test(`EUR`, (done) => {
    setTimeout(() => {
      expect(() => toWords(
          452, {currency: true, label: 'EUR'}
      ).toEqual('Four Hundred Fifty Two EUR Only'));
      done(); // Call done to indicate the end of the test
    }, 140000); // 4 minutes delay (4 * 60 * 1000 milliseconds)
  });

  test(`EUR`, (done) => {
    setTimeout(() => {
      expect(() => toWords(
          452.36, {currency: true, label: 'EUR'}
      ).toEqual('Four Hundred Fifty Two EUR And Thirty Six Only'));
      done(); // Call done to indicate the end of the test
    }, 140000); // 4 minutes delay (4 * 60 * 1000 milliseconds)
  });
});

