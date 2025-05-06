function divCon(x){
  let strngs = x.filter(x=>typeof x == 'string').map(Number).reduce((acc,curr)=>acc + curr , 0)
  let nums = x.filter(x=>typeof x !== 'string').reduce((curr,acc)=>curr+acc,0)
  return nums - strngs
}
