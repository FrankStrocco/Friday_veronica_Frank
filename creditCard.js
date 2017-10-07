












function creditCard(num) {
  var newArr = []
  var stringNum = num.toString();
  var numArray = stringNum.split("");
  console.log(numArray);

  var checkNum = numArray.pop();
  console.log(checkNum, numArray);

  var revArray = numArray.reverse();
  console.log(revArray);

  for (x = 0; x <revArray.length; x++) {
    if (x % 2 == 0) {
      newArr.push(revArray[x] * 2);
      console.log(x);
  } else {
      newArr.push(revArray[x])
  }
}
  console.log(newArr);
}

creditCard(1233443234433789);
