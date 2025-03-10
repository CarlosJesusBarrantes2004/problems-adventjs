/**
 * You receive a Christmas gifts pack that Santa Claus wants to deliver to the children. Each gift inside the pack is represented by a string 
 * and it has a weight equal to the number of letters in its name. Santa Claus's sleigh can only carry a weight limit.

Santa Claus also has a list of reindeer able to help him to deliver the gifts. Each reindeer has a maximum weight limit that it can carry. The 
maximum weight limit of each reindeer is equal to twice the number of letters in its name.

Your task is to implement a function distributeGifts(packOfGifts, reindeers) that receives a gifts pack and a list of reindeer and returns the 
maximum number of gifts packs that Santa Claus can deliver. You can't split gifts packs.

const packOfGifts = ["book", "doll", "ball"]
const reindeers = ["dasher", "dancer"]

// pack weights 4 + 4 + 4 = 12
// reindeers can carry (2 * 6) + (2 * 6) = 24
distributeGifts(packOfGifts, reindeers) // 2
Things to keep in mind:

The gifts pack can't be splitted.
Gifts and reindeers' names length will always be greater than 0.
 */

function distributeGifts(packOfGifts: string[], reindeers: string[]): number {
  const packageWeight = packOfGifts.reduce((acc, curr) => acc + curr.length, 0);
  const reindeerWeight = reindeers.reduce(
    (acc, curr) => acc + curr.length * 2,
    0
  );

  if (packageWeight <= reindeerWeight || packageWeight % reindeerWeight === 0)
    return Math.floor(reindeerWeight / packageWeight);

  return 0;
}

console.log(distributeGifts(["a", "b", "c"], ["d", "e"]));
console.log(distributeGifts(["videogames", "console"], ["midu"]));
console.log(
  distributeGifts(
    ["game", "videoconsole", "computer"],
    [
      "midudev",
      "pheralb",
      "codingwithdani",
      "carlosble",
      "blasco",
      "facundocapua",
      "madeval",
      "memxd",
    ]
  )
);
