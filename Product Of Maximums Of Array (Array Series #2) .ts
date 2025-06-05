export function maxProduct(numbers: number[], size: number): number {
  return numbers.sort((a,b)=>b-a).slice(0,size).reduce((acc,curr)=>acc*curr,1)
}
