import { decode, encode } from './morse';

describe('decode', () => {
  it('translates encoded message', () => {
    expect(decode('.... . -.--   .--- ..- -.. .')).toEqual('HEY JUDE');
  });
});

describe('encode', () => {
  it('transforms text to encoded message', () => {
    expect(encode('HEY JUDE')).toEqual('.... . -.--   .--- ..- -.. .');
  });
});
