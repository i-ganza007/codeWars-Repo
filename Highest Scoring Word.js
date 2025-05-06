function high(x) {
  const words = x.split(' ');
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  
  let maxScore = 0;
  let highestWord = '';

  for (let word of words) {
    const score = [...word].reduce((acc, char) => acc + alphabet.indexOf(char) + 1, 0);
    if (score > maxScore) {
      maxScore = score;
      highestWord = word;
    }
  }

  return highestWord;
}
