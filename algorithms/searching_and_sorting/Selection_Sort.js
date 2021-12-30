function findMinNumber(arr) {
  return Math.min(...arr);
}

function findMinIndex(arr) {
  return arr.indexOf(findMinNumber(arr));
}

function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let minNumber = findMinNumber(arr.slice(i));
    if (minNumber !== arr[i]) {
      let minIndex = findMinIndex(arr.slice(i)) + i;
      let temp = arr[minIndex];
      arr[minIndex] = arr[i];
      arr[i] = temp;
    }
  }
  return arr;
}

let arr = [64, 25, 12, 22, 11];
console.log(selectionSort(arr));
