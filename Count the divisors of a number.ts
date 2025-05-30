export function divisors(n: number) {
  return Array.from({length:n},(_,i)=>{return i+1}).filter(x=>n%x==0).length
}
