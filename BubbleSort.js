async function bubbleSort(arr, start, end) {
  for(var i = end-1; i >=0; i--) {
    states[i] = 1;
    for(var j = 0; j < i; j++) {
      if(arr[i] <= arr[j]) {
        states[j] = 0;

        await swap(arr, i, j);
        //states[j] = 0;
      }
      states[j] = -1;
    }
    states[i] = -1;
  }
  return arr;
}
