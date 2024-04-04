const toWords = require('../index');

describe('toWords', () => {
  test(`minor test`, () => {
    expect(() => toWords(123).toEqual('One Hundred Twenty Three'));
    expect(() => toWords(123.45).toEqual('One Hundred Twenty Three Point Fourty Five'));
  });

  for (let i = 0; i < 16; i++) {
    test(`EUR ${i}`, (done) => {
      setTimeout(() => {
        expect(() => toWords(
            452, {currency: true, label: 'EUR'}
        ).toEqual('Four Hundred Fifty Two EUR Only'));
        done(); // Call done to indicate the end of the test
      }, 4500); // 4500 milliseconds delay
    });
  }

  for (let i = 0; i < 16; i++) {
    test(`EUR ${i}`, (done) => {
      setTimeout(() => {
        expect(() => toWords(
            452.36, {currency: true, label: 'EUR'}
        ).toEqual('Four Hundred Fifty Two EUR And Thirty Six Only'));
        done(); // Call done to indicate the end of the test
      }, 4500); // 4500 milliseconds delay
    });
  }
});
