import { helloWorld } from './main';

test('says hi node & ts', () => {
  expect(helloWorld()).toEqual('Hello Node+TS!');
});
