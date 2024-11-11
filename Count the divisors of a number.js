function getDivisorsCnt(n){
    let starter = 1;
    let iterables = [];
    while(iterables.length < n){
      iterables.push(starter);
      starter++;
    }
   let result = iterables.filter(x=>n%x==0);
   return result.length;
}
