function Bubble(arr) {
    let swapped = false;
    for(i=0; i<arr.length;i++) {
        for(j=0;j<(arr.length-i-1);j++) {
            if (arr[j]>arr[j+1]) {
        var temp = arr[j]
       arr[j] = arr[j + 1]
       arr[j+1] = temp

            }
        }
    }
    console.log(arr)
}
console.log(Bubble( [234, -43, 55, 63,  5, 6, 235, 547], 8))