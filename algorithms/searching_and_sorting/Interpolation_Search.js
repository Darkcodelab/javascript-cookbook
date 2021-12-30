function interpolationSearch(arr, low, high, x) {
  let pos;
  if (low <= high && x >= arr[low] && x <= arr[high]) {
    pos =
      low +
      Math.floor(((high - low) / (arr[high] - arr[low])) * (x - arr[low]));

    console.log(pos);
    if (arr[pos] == x) {
      return pos;
    }
    if (arr[pos] < x) {
      return interpolationSearch(arr, pos + 1, high, x);
    }

    if (arr[pos] > x) {
      return interpolationSearch(arr, low, pos - 1, x);
    }
  }
  return -1;
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8];

console.log(interpolationSearch(arr, 0, arr.length - 1, 4));
