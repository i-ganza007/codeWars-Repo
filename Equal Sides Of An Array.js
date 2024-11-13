function findEvenIndex(arr)
{
  for(let i =0;i<arr.length;i++){
    let a = arr.slice(0,i);
    let b = arr.slice(i,arr.length)
    
    let a_result = a.reduce((acc,currentVal)=>{acc+currentVal},0)
    let b_result = b.reduce((acc,currentVal)=>{acc+currentVal},0)
    
    return i ? a_result == b_result : -1
  }
}
