/**
 * They are turning on the Christmas lights 🎄 in the city and, as every year, they have to be fixed!

The lights are of two colors: 🔴 and 🟢 . For the effect to be appropriate, they must always alternate. That is, if the first light is red, the 
second must be green, the third red, the fourth green, etc.

We have been asked to write a function adjustLights that, given an array of strings with the color of each light, return the minimum number of 
lights that need to be changed for the colors to alternate.

adjustLights(['🟢', '🔴', '🟢', '🟢', '🟢'])
// -> 1 (you change the fourth light to 🔴)

adjustLights(['🔴', '🔴', '🟢', '🟢', '🔴'])
// -> 2 (you change the second light to 🟢 and the third to 🔴)

adjustLights(['🟢', '🔴', '🟢', '🔴', '🟢'])
// -> 0 (they are already alternating)

adjustLights(['🔴', '🔴', '🔴'])
// -> 1 (you change the second light to 🟢)
 */

function adjustLights(lights: string[]): number {
  if (lights.length === 0) return 0; // Handle empty array edge case

  const size = lights.length;
  const init = lights[0];
  const second = init === "🔴" ? "🟢" : "🔴";

  let changesPattern1 = 0;
  let changesPattern2 = 0;

  for (let i = 0; i < size; i++) {
    const expectedPattern1 = i % 2 === 0 ? init : second;
    const expectedPattern2 = i % 2 === 0 ? second : init;

    if (lights[i] !== expectedPattern1) changesPattern1++;
    if (lights[i] !== expectedPattern2) changesPattern2++;
  }

  return Math.min(changesPattern1, changesPattern2);
}

console.log(adjustLights(["🟢", "🔴", "🟢", "🟢", "🟢"]));
console.log(adjustLights(["🔴", "🔴", "🟢", "🟢", "🔴"]));
console.log(adjustLights(["🟢", "🔴", "🟢", "🔴", "🟢"]));
console.log(adjustLights(["🔴", "🔴", "🔴"]));
console.log(adjustLights(["🔴", "🔴", "🟢", "🔴", "🟢"]));
