import { mappings } from './mappings';
import { MorseSymbol } from './morseSymbol';

const REGULAR_WORD_SPACE = ' ';
const MORSE_WORD_SPACE = '   ';
const MORSE_LETTER_SPACE = ' ';

export function decode(code: string) {
  return code
    .split(MORSE_WORD_SPACE)
    .map(word =>
      word
        .split(MORSE_LETTER_SPACE)
        .map(mapSymbolToLetter)
        .join(''))
    .join(MORSE_LETTER_SPACE);
}

function mapSymbolToLetter(symbol: string) {
  let found: MorseSymbol | undefined = mappings.find(value => value.symbol == symbol);

  if (found === undefined)
    return '';
  else
    return found.translation;
}

export function encode(text: string) {
  return text
    .split('')
    .map(mapLetterToSymbol)
    .reduce(function (accumulator, currentValue) {
      return isMorseWordSpace(currentValue) || isAccumulatorMorseWordSpace(accumulator)
        ? `${accumulator}${currentValue}`
        : `${accumulator}${MORSE_LETTER_SPACE}${currentValue}`;
    });
}

function mapLetterToSymbol(letter: string) {
  if (letter === REGULAR_WORD_SPACE)
    return MORSE_WORD_SPACE;

  let found: MorseSymbol | undefined = mappings.find(value => value.translation == letter);

  if (found === undefined)
    return '';
  else
    return found.symbol;
}

function isMorseWordSpace(value: string) {
  return value === MORSE_WORD_SPACE;
}

function isAccumulatorMorseWordSpace(accumulator: string) {
  return accumulator.substring(accumulator.length - MORSE_WORD_SPACE.length) === MORSE_WORD_SPACE;
}
