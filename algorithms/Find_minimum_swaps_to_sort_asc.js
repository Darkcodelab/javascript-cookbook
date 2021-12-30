let arr = [4, 1, 2, 3];

function minimumSwaps(arr) {
  let n = arr.length;
  let arrPos = [];
  for (let i = 0; i < arr.length; i++) {
    arrPos.push([arr[i], i]);
  }
  console.log(arrPos);
  arrPos.sort((a, b) => a[0] - b[0]);
  console.log(arrPos);

  let vis = new Array(n);
  for (let i = 0; i < n; i++) {
    vis[i] = false;
  }
  console.log(vis);

  let ans = 0;
  for (let i = 0; i < n; i++) {
    if (vis[i] || arrPos[i][1] == i) continue;
    let cycleSize = 0;
    let j = i;
    while (!vis[j]) {
      vis[j] = true;
      j = arrPos[j][1];
      cycleSize++;
    }

    if (cycleSize > 0) {
      ans += cycleSize - 1;
    }
  }
  return ans;
}

console.log(minimumSwaps(arr));
