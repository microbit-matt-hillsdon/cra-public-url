test('can pass PUBLIC_URL', () => {
  expect(process.env.PUBLIC_URL).toEqual("test1")
});
test('can pass SOMETHING_ELSE', () => {
  expect(process.env.SOMETHING_ELSE).toEqual("test2")
});
