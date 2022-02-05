function isBalanced(str) {
  let matchedChars = {
    '(': 0, ')': 0, '[': 0, ']': 0, 
    '{': 0, '}': 0, "'": 0, '"': 0,
  }

  const keys = Object.keys(matchedChars);

  for(let i = 0; i < str.length; i++) {
    if (keys.includes(str[i])) matchedChars[str[i]] += 1;

    for (i = 0; i < 5; i += 2) {
      if (matchedChars[keys[i]] < matchedChars[keys[i + 1]]) return false;
    }
  }

  for (i = 0; i < 5; i += 2) {
    if (matchedChars[keys[i]] !== matchedChars[keys[i + 1]]) return false;
  }

  if (matchedChars['"'] % 2 !== 0 || matchedChars["'"] % 2 !== 0) return false;

  return true;
}

console.log(isBalanced('test{()}11'));