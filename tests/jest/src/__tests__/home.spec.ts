import { readPage, replaceIndexNG } from '../test-config.helper';

describe('Check list of all', () => {
  it('Check clean all list from scully', () => {
    const index: string = readPage('/home/all');
    const cleanIndex = replaceIndexNG(index);
    expect(cleanIndex).toMatchSnapshot();
  });
});
