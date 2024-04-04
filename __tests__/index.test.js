const toWords = require('../index');

describe('toWords', () => {
  test(`minor test`, () => {
    expect(() => toWords(123).toEqual('One Hundred Twenty Three'));
    expect(() => toWords(123.45).toEqual('One Hundred Twenty Three Point Fourty Five'));
  });
});
