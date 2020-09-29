async function quickSort(states, arrOfValues, lo, hi) {
  if (lo >= hi) {
    return;
  }
  let psuedoPivot = await partition(states,arrOfValues, lo, hi);
  states[psuedoPivot] = -1;

  await Promise.all([
    quickSort(states, arrOfValues, lo, psuedoPivot - 1),
    quickSort(states, arrOfValues, psuedoPivot + 1, hi)
  ]);
}

async function partition(states, arrOfValues, lo, hi) {

  let checkAgainst = arrOfValues[hi];
  states[hi] = 1;
  let greaterThan = lo;
  states[greaterThan] = 0;
  for (let i = lo; i < hi; i++) {
    if (arrOfValues[i] < checkAgainst) {
      await swap(arrOfValues, i, greaterThan);
      states[greaterThan] = -1;
      greaterThan++;
      states[greaterThan] = 0;
    }
  }
  states[hi] = -1;
  await swap(arrOfValues, greaterThan, hi);

  for (let i = lo; i < hi; i++) {
    if (i != greaterThan) {
      states[i] = -1;
    }
  }

  return greaterThan;
}

async function swap(arrOfValues, i, j) {
  await sleep(25);
  let temp = arrOfValues[i];
  arrOfValues[i] = arrOfValues[j];
  arrOfValues[j] = temp;
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
