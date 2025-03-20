// reverse the order of words in a string

let str = "rama's shyam sita" // shyam ram
let revword = []

//Way1

str.split(" ").forEach((word,i) => {
  revword.unshift(word)
    
})
console.log(revword.join(" "))

// Way2

let word = str.split(" ");
let revW=""
for(let i = word.length-1; i >=0; i--)
{
    revW += word[i]+" ";
}
console.log(revW);
