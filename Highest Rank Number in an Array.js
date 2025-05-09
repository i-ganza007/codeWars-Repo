function highestRank(arr){
  let obj = {}
  for(let i of arr){
    i in obj ? obj[i] += 1 : obj[i] = 1
  }
  let biggest = Math.max(...Object.values(obj))
  let arrs = Object.keys(obj).filter(x=>obj[x] == biggest).map(Number)
  return Math.max(...arrs)
}
