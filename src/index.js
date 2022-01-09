module.exports = function reverse(n) {
  if (n < 0) {
    n = -n;
  }
  let str = n.toString();
  let newStr = '';
  for (let i = 0; i < str.length; i++) {
    newStr = newStr + str[str.length - 1 - i];
  }
  return +newStr;
}
