function binarySearch(sortedArray, key){
    let start = 0;
    let end = sortedArray.length - 1;

    while (start <= end) {
        let middle = Math.floor((start + end) / 2);

        if (sortedArray[middle] === key) {
            
            return middle;

        } else if (sortedArray[middle] < key) {
            
            start = middle + 1;
        } else {
          
            end = middle - 1;
        }
    }
    
    return -1;
}

const array = [-1,0,10,200,3000,40000,500000,600000,70000000,800000000,9000000000,1000000000000];

console.log(binarySearch(array, 40000));
