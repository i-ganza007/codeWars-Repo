function isDivisible(){
  const [first,...others] = [...arguments]
  return [...others].every(x=>first % x == 0)
}
