function mergeSort(a, states) {
  // create tempArr of the array
  tempArr = a.slice();

  // asynchronous sort the tempArr
  mergeSortSlice(tempArr, 0, tempArr.length, states);
  return;
}

async function mergeSortSlice(tempArr, lo, hi, states) {
  if (hi-lo <= 1)
  return;
  var mid = Math.round((hi+lo) / 2);

  // async run both calls as values arent dependant on each other
  await Promise.all([
    mergeSortSlice(tempArr, lo, mid, states),
    mergeSortSlice(tempArr, mid, hi, states)
  ]);

  // merge divides and sorts the values of two arrays
  let i = lo, j = mid;
  while (i < hi && j < hi) {
    states[i] = 0;
    states[j] = 0;
    if (tempArr[i] > tempArr[j]) {
      await sleep(25);
      let temp = tempArr[j];
      tempArr.splice(j, 1);
      // cuts the array starting from i, removes 0 elements and adds t value
      tempArr.splice(i, 0, temp);
      states[i] = 1;
      states[j] = 1;
      j ++;

    }
    i ++;
    if (i==j) j ++;
    // tempArr back the current state of the sorting
    arrOfVals = tempArr.slice();

    // statess for coloring the bars
    for (let i = lo; i < hi; i++) {
      states[i] = -1;
    }
  }

}
