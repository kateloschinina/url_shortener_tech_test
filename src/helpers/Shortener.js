function shortener(number) {
  var res = lastNumber(number);
  number = Math.floor(number/62);
  while (number > 0) {
    res += lastNumber(number);
    number = Math.floor(number/62);
  }
  return res;
}

function lastNumber(number) {
  const remainder = number % 62;
  if(remainder < 26) {
    return String.fromCharCode(remainder + 97);
  } else if (remainder < 36) {
    return String.fromCharCode(remainder - 26 + 48);
  } else {
    return String.fromCharCode(remainder - 36 + 65);
  }
}

export { shortener, lastNumber };
