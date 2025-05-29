export function monkeyCount(n: number) {
  return Array.from({length:n},(_,i:number)=>{return i+1})
}
