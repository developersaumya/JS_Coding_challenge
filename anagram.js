//can form same word by rearranging the letter of another word

function isAnagram(str1, str2) {

  const formatStr = (str) =>{
    str.toLowerCase().replace(/[^a-z]/g, '').split('').sort().join('')
  }

  return formatStr(str1) === formatStr(str2);
}
console.log(isAnagram('listen1111', 'silent'));
