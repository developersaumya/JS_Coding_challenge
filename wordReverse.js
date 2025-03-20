let str = "abcd jaha se accha"
let rev=""
let revword = ""
str.split(" ").forEach((word) => {
   rev = word.split("").reverse().join("")
   revword +=  rev+" "
})

console.log(revword)
