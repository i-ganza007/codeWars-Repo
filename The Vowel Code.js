function encode(string) {
  let vowels = ['a','e','i','o','u']
  let arr = string.split('')
  for(let i in arr){
    if(vowels.includes(arr[i])){
      arr[i] = (vowels.indexOf(arr[i]) + 1).toString()
    }
  }
  return arr.join('')
}

function decode(string) {
  let vowels = {'1':'a','2':'e','3':'i','4':'o','5':'u'}
  let arr = string.split('')
  for(let i in arr){
    if(arr[i] in vowels){
      arr[i] = vowels[arr[i]]
    }
  }
  return arr.join('')
}
