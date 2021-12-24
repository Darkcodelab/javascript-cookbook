// Given an array arr[] of n elements, write a function to search a given element x in arr[]

function LinearSearch(arr, x) {
  let n = arr.length;
  let i = 0;
  for (i = 0; i < n; i++) if (arr[i] == x) return i;
  return -1;
}

let arr = [1, 3, 4, 5, 6, , 3, 2, 4];

LinearSearch(arr, 4); // 2
LinearSearch(arr, 5); // 3
LinearSearch(arr, 10); // -1
