function switcheroo(x){
  return [...x].map((x)=> x !== 'c' && x=='a' ? 'b' : x !== 'c' && x == 'b' ? 'a' : 'c').join('')
}
