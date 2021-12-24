// Given a sorted array arr[] of n elements, write a function to search a given element x in arr[].

function binarySearch(arr, x, i = 0, j = arr.length - 1) {
  if (j >= i) {
    let mid = i + Math.floor((j - 1) / 2);
    if (arr[mid] == x) {
      return mid;
    }

    if (arr[mid] > x) {
      return binarySearch(arr, x, i, mid - 1);
    }
    return binarySearch(arr, x, 1 + mid, j);
  }
  return -1;
}

let arr = [1, 2, 3, 4, 5];
console.log(binarySearch(arr, 3)); // 2

/*
1st iteration - 
    i = 0, j = 4
    j >= i --> 4 >= 0 ? TRUE
    mid = i + floor((j-1)/2) --> 0 + floor(3/2) --> 1
    arr[mid] = 2
        2 == 3 ? FALSE
        2 > 3 ? FALSE
        binarySearch (arr, 3, 1 + (1), 4) --> binarySearch (arr, 3, 2, 4)

2nd iteration - 
    i = 2, j = 4
    j >= i --> 4 >= 2 ? TRUE
    mid = i + floor ((4-1) / 2) --> 2 + 1 --> 3
    arr[mid] = 4
        4 == 3 ? FALSE
        4 > 3 ? TRUE
        binarySearch (arr, 3, 2, 2);

3rd iteration - 
    i = 2, j = 2
    j >= i --> 2 >= 2 ? TRUE
    mid = 2 + floor ((2-1)/2) --> 2 + 0 --> 2
    arr[mid] = 3
    arr[mid] == x ? TRUE
    EXIT
*/
