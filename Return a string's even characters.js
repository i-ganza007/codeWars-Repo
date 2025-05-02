function evenChars(string) {
  return string.length < 2 || string.length > 100 ? 'invalid string' : string.slice(1).split('').filter((_,idx)=>idx%2==0)
}
