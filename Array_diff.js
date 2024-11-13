function arrayDiff(a, b) {
  let d = []
  for(let i =0;i<a.length;i++){
    if(!b.includes(a[i])){
      d.push(a[i])
    }
  }
  for(let y =0;y<b.length;y++){
    if(!a.includes(b[y])){
      d.push(b[y])
    }
  }
  return d
}
