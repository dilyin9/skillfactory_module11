import {countDown} from '../index'

describe ("test function", () => {
  it ("positive number", () => {
    expect(countDown(4)).toBe("4 3 2 1");
  }),
  it ("negative number", () => {
    expect(countDown(-3)).toBe("-3 -2 -1");
  }),
  it ("null", () => {
    expect(countDown(0)).toBe("0");
  })
});