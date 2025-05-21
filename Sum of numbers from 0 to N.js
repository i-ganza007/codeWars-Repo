var SequenceSum = (function() {
  function SequenceSum() {}

  SequenceSum.showSequence = function(count) {
    if(count<0){
      return `${count}<0`
    }
    else if(count == 0){
      return '0=0'
    }
    else{
      let str = ''
      for(let i=0;i<=count;i++){
        str += i
        if(i<count){
          str += '+'
        }
      }
      return `${str}=${Array.from({length:count+1},(_,i)=>i).reduce((acc,curr)=>acc+curr,0)}`
    }
  };

  return SequenceSum;

})();
