function generateShape(integer){
  let str = ''
  for(let i=0;i<integer;i++){
    str += `${'+'.repeat(integer)}\n`
  }
  return str.trimEnd()
}
