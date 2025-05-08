function findLongest(array){
  return +array.map(String).sort((a,b)=>b.length - a.length)[0]
}
