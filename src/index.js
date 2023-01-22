module.exports = function toReadable(introducedNum) {
  const toTen = '"" one two three four five six seven eight nine'.split(' ');
  const toTwenty = 'ten eleven twelve thirteen fourteen fifteen sixteen seventeen eighteen nineteen'.split(' ');
  const toHundred = 'twenty thirty forty fifty sixty seventy eighty ninety'.split(' ');
  if (introducedNum < 0) throw new Error('Error!');

  if (introducedNum === 0) return 'zero';
  let num = introducedNum.toString()
  switch (num.length) {
    case 1: return toTen[introducedNum]
    case 2:
      if (Number(num[0]) === 1) {
        return toTwenty[num[1]]
      }
    case 3:
      if (introducedNum >= 20 && introducedNum < 100) {
        if (introducedNum % 10 == 0) {
          return toHundred[Math.floor(introducedNum / 10 - 2)]
        } else {
          return toHundred[Math.floor(introducedNum / 10 - 2)] + ' ' + toTen[introducedNum % 10]
        }
      }
    case 4:
      if (num.length == 3) {
        if (num[1] === '0' && num[2] === '0')
          return (toTen[num[0]] + ' hundred').trim();
        else
          return toTen[num[0]] + ' hundred ' + toReadable(+(num[1] + num[2])).trim();
      }
  }
}


