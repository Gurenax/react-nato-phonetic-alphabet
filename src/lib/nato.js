function toNato(words) {
  const telephony = {
    A: 'Alfa',
    B: 'Bravo',
    C: 'Charlie',
    D: 'Delta',
    E: 'Echo',
    F: 'Foxtrot',
    G: 'Golf',
    H: 'Hotel',
    I: 'India',
    J: 'Juliett',
    K: 'Kilo',
    L: 'Lima',
    M: 'Mike',
    N: 'November',
    O: 'Oscar',
    P: 'Papa',
    Q: 'Quebec',
    R: 'Romeo',
    S: 'Sierra',
    T: 'Tango',
    U: 'Uniform',
    V: 'Victor',
    W: 'Whiskey',
    X: 'Xray',
    Y: 'Yankee',
    Z: 'Zulu',
    '1': 'One',
    '2': 'Two',
    '3': 'Three',
    '4': 'Four',
    '5': 'Five',
    '6': 'Six',
    '7': 'Seven',
    '8': 'Eight',
    '9': 'Nine',
    '0': 'Zero'
  }

  let nato = []
  // Split words to array
  words
    .toUpperCase()
    .split('')
    .map(char => {
      // If character is not a space
      if (char !== ' ') {
        // Convert the character to nato and push to nato array
        const val = telephony[char]
        // If val is not undefined, push val to nato array else use original character
        nato.push(val !== undefined ? val : char)
      }
      return null
    })
  return nato.join(' ') // Convert the array to string separated by spaces
}

function toMessage(nato) {
  const telephonyReverse = {
    alfa: 'A',
    bravo: 'B',
    charlie: 'C',
    delta: 'D',
    echo: 'E',
    foxtrot: 'F',
    golf: 'G',
    hotel: 'H',
    india: 'I',
    juliett: 'J',
    kilo: 'K',
    lima: 'L',
    mike: 'M',
    november: 'N',
    oscar: 'O',
    papa: 'P',
    quebec: 'Q',
    romeo: 'R',
    sierra: 'S',
    tango: 'T',
    uniform: 'U',
    victor: 'V',
    whiskey: 'W',
    xray: 'X',
    yankee: 'Y',
    zulu: 'Z',
    one: '1',
    two: '2',
    three: '3',
    four: '4',
    five: '5',
    six: '6',
    seven: '7',
    eight: '8',
    nine: '9',
    zero: '0'
  }

  let words = []
  nato.split(' ').map(phonetic => {
    if (phonetic !== ' ') {
      const val = telephonyReverse[phonetic.toLowerCase()]
      if (val) {
        words.push(val)
      }
      else {
        words.push(' ')
      }
    }
    return null
  })
  return words.join('')
}

module.exports = { toNato, toMessage }

// console.log(to_nato("If you can read")); //, "India Foxtrot Yankee Oscar Uniform Charlie Alfa November Romeo Echo Alfa Delta");
// console.log(to_nato("Did not see that coming")); //), "Delta India Delta November Oscar Tango Sierra Echo Echo Tango Hotel Alfa Tango Charlie Oscar Mike India November Golf");
// console.log(to_nato("go for it!")); //,"Golf Oscar Foxtrot Oscar Romeo India Tango !");
