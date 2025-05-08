function minSum(arr) {
  let lower = arr.sort((a,b)=>a-b).slice(0,arr.length/2) , high = arr.sort((x,y)=>x-y).slice(arr.length/2,arr.length).reverse()
  return lower.reduce((acc,curr,idx)=>acc+(curr*high[idx]),0)
}
