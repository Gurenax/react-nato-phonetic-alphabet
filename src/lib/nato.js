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

export default toNato

// console.log(to_nato("If you can read")); //, "India Foxtrot Yankee Oscar Uniform Charlie Alfa November Romeo Echo Alfa Delta");
// console.log(to_nato("Did not see that coming")); //), "Delta India Delta November Oscar Tango Sierra Echo Echo Tango Hotel Alfa Tango Charlie Oscar Mike India November Golf");
// console.log(to_nato("go for it!")); //,"Golf Oscar Foxtrot Oscar Romeo India Tango !");
