var arr = [1, 2, 3, 4,4,1];
var tempArr = arr;
var temp = arr.length + 1;
console.log(arr.length);
for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < tempArr.length; j++) {
    if (i !== j) {
      if (arr[i] == arr[j]) {
        console.log('result',temp,j);
        if (temp > j) {
          temp = j;
          tempArr.splice(j,1);
        }
      }
    }
  }
}
if (temp != arr.length +1) {
  console.log('aarr',arr);
  console.log('tempnu',temp);
  console.log('repeat number is:', arr[temp]);
} else {
  console.log('no repeat number here');
}
