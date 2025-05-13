function change(string){
  let str = 'abcdefghijklmnopqrstuvwxyz'
  return Array.from(str,chr=>string.toLowerCase().includes(chr) ? '1' : '0').join('')
}
