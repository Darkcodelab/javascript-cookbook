// suppose we have an array arr[] of size n and block (to be jumped) size m. Then we search at the indexes arr[0], arr[m], arr[2m]…..arr[km] and so on. Once we find the interval (arr[km] < x < arr[(k+1)m]), we perform a linear search operation from the index km to find the element x.

function jumpSearch(arr, x) {
  let len = arr.length;
  let j = Math.floor(Math.sqrt(len));
  let m = 0;
  n = len;
  for (let i = 0; i < len; i += j) {
    if (arr[i] >= x) {
      m = i - j;
      n = i;
      i = len;
    }
    if (arr[i] <= x) {
      m = i;
    }
  }
  let answer = -1;
  console.log(m, n);
  for (let i = m; i <= n; i++) {
    if (arr[i] == x) {
      answer = i;
    }
  }
  return answer;
}

console.log(jumpSearch([1, 2, 3, 4, 5], 4));
