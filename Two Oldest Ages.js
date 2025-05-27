// return the two oldest/oldest ages within the array of ages passed in.
function twoOldestAges(ages){
  let res = ages.sort((a,b)=>b-a)
  return [res[1],res[0]]
}
