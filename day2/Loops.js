function vowelsAndConsonants(s) {
  var vowels = [];
  var consoonants = [];
  for (var i = 0; i < s.length; i++) {
    if (/a|e|i|o|u/i.test(s[i])) {
      vowels.push(s[i])
    } else {
      consoonants.push(s[i])
    }
  }
  console.log([...vowels, ...consoonants].join('\n'));
}
