// Code your solutions in this file
function writeCards(array) {
  let newArr = []
  for (let i = 0; i < array.length; i++) {
    let name = array[i];

    newArr.push(`Thank you, ${name}, for the wonderful surprise gift!`);
  }
  return newArr;
}

function countDown(num) {
  let i = num

  while (i >= 0) {
    console.log(i)

    i--
  }
}
