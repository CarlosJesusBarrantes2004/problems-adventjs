/**
 * In Santa's workshop, a mischievous elf has been playing around with the gift production line, adding or removing an unplanned step.

You have the original sequence of original manufacturing steps and the modified modified sequence that may include an extra step or be missing 
a step.

Your task is to write a function that identifies and returns the first extra step that was added or removed in the manufacturing chain. If there 
is no difference between the sequences, return an empty string.

const original = 'abcd'
const modified = 'abcde'
findNaughtyStep(original, modified) // 'e'

const original = 'stepfor'
const modified = 'stepor'
findNaughtyStep(original, modified) // 'f'

const original = 'abcde'
const modified = 'abcde'
findNaughtyStep(original, modified) // ''
Please, keep in mind:

There will always be one different step or none.
The modification can occur anywhere in the string.
The original steps could be empty
 */

function findNaughtyStep(original: string, modified: string): string {
  let letter: string = "";

  if (original.length > modified.length) {
    for (let i = 0; i < original.length; i++) {
      if (original[i] !== modified[i]) {
        letter = original[i];
        break;
      }
    }
  }

  if (original.length < modified.length) {
    for (let i = 0; i < modified.length; i++) {
      if (original[i] !== modified[i]) {
        letter = modified[i];
        break;
      }
    }
  }

  return letter;
}

const original = "abcd";
const modified = "abcde";
console.log(findNaughtyStep(original, modified));

const original1 = "stepfor";
const modified1 = "stepor";
console.log(findNaughtyStep(original1, modified1));

const original2 = "abcde";
const modified2 = "abcde";
console.log(findNaughtyStep(original2, modified2));
