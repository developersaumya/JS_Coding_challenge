// Ascending Order

let arr = [11, 5, 8, 1, 4, 9, 3];
for(i=1; i<arr.length; i++)
{
  for(j=0; j<arr.length-i; j++) 
  {
    temp = arr[i]
    arr[i] = arr[i+1]
    arr[i+1] = temp
  }

}
