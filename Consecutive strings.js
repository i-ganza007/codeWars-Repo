function longestConsec(strarr, k) {
    if(strarr.length == 0 || k>strarr.length || k<=0){
      return ''
    }
  else{
    let arr = strarr.map((x,idx)=>strarr.slice(idx,idx+k).join(''))
    return arr.sort((a,b)=>b.length - a.length)[0]
    
  }
}
