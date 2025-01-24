/**
 * Santa is experimenting with new gift designs and he needs your help to visualize them in 3D.

Your task is to write a function that, given a size n (integer), generates a drawing of a 3D gift using ASCII characters.

The lines of the gifts are drawn with # and the faces with the symbol passed to us as a parameter:

drawGift(4, '+')

   ####
  #++##
 #++#+#
####++#
#++#+#
#++##
####

drawGift(5, "*");

    #####
   #***##
  #***#*#
 #***#**#
#####***#
#***#**#
#***#*#
#***##
#####

drawGift(1, "^");

#

Important: We have been told that there is always to leave a newline at the end of the drawing.
*/

function drawGift(n: number, symbol: string): string {
  if (n === 1) return "#";

  let gift = "#".repeat(n) + `${symbol.repeat(n - 2)}#`;

  for (let i = 0; i < n - 1; i++) {
    if (i === n - 2)
      gift =
        " ".repeat(i + 1) + "#".repeat(n) + "\n" + gift + "\n" + "#".repeat(n);
    else
      gift =
        " ".repeat(i + 1) +
        "#" +
        `${symbol.repeat(n - 2)}` +
        "#" +
        `${symbol.repeat(n - 3 - i)}#\n` +
        gift +
        "\n#" +
        `${symbol.repeat(n - 2)}#` +
        `${symbol.repeat(n - 3 - i)}#`;
  }

  return gift;
}

console.log(drawGift(4, "+"));
console.log(drawGift(5, "*"));
console.log(drawGift(1, "^"));
