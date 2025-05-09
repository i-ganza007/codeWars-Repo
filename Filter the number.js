function filterString(value) {
  return parseInt([...value].filter(x=>Number.isInteger(parseInt(x))).join(''))
}
