function vowelIndices(word){
  let arr = [...word]
  return arr.map((x,idx,arr)=>'aeiouyAEIOUY'.includes(x) ? idx + 1 : null).filter(Boolean)
}
