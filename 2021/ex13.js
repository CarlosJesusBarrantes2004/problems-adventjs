/**
 * ¡Hay demasiados regalos 🎁! Y envolverlos es una locura...

Vamos a crear una función que pasándole un array de regalos, nos devuelva otro array pero donde todos los regalos han sido envueltos con asteriscos tanto por arriba como por los lados.

Sólo tienes que tener en cuenta unas cosillas ✌️:

Si el array está vacío, devuelve un array vacío
Los regalos son emojis 🎁... por lo que tenlo en cuenta a la hora de contar su longitud...
Por suerte, cada posición del array siempre tiene la misma longitud...

wrapGifts(["📷", "⚽️"])
Resultado:
[ '****',
  '*📷*',
  '*⚽️*',
  '****'
]

wrapGifts(["🏈🎸", "🎮🧸"]);
Resultado:
[ '******',
  '*🏈🎸*',
  '*🎮🧸*',
  '******'
]

wrapGifts(["📷"]);
Resultado:
[ '****',
  '*📷*',
  '****'
]
*/

function wrapGifts(gifts) {
  if (gifts.length === 0) return gifts;

  const width = gifts[0].split("").reduce((accu, curr) => {
    accu += curr.length;
    return accu;
  }, 0);

  let wrap = ["*".repeat(width + 2)];

  wrap = [
    ...wrap,
    ...gifts.reduce((accu, curr) => {
      accu.push(`*${curr}*`);
      return accu;
    }, []),
  ];

  wrap.push("*".repeat(width + 2));

  return wrap;
}

console.log(wrapGifts(["🏈🎸", "🎮🧸"]));
