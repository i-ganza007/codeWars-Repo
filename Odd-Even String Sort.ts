export function sortMyString(s:string):string {
  return `${[...s].filter((x,i)=>i%2==0).join('')} ${[...s].filter((x,i)=>i%2!=0).join('')}`
}
