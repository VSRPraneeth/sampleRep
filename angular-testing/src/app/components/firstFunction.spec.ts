import { addition } from './firstFunction';
xdescribe('Addition Test', () => {
  it('testing addition function', () => {
    expect(addition(10, 20)).toBe(30);
  });
});
