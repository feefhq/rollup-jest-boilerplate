import foo from '../src/foo'

test('foo imports bar', () => {
  expect(foo()).toEqual('foo bar')
});
