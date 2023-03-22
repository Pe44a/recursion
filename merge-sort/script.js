    
    function merge(leftArray, rightArray) {
        let merge = [];

        let a = 0;
        let b = 0;
        let c = 0;

        while(merge.length !== (leftArray.length + rightArray.length)) {
            if(leftArray[a] <= rightArray[b] || rightArray[b] === undefined){
                merge[c] = leftArray[a];
                c++, a++;
            } 
            else {
                merge[c] = rightArray[b];
                c++, b++;
            }
        }
        return merge;
    }
    
    
    function mergeSort(array) {

        if (array.length <= 1) {
            return array;
        }



        if(0 < array.length -1) {
            
            const mid = Math.round((array.length -1) / 2);
            const leftSide = array.slice(0, mid);
            const rightSide = array.slice(mid);

        
            const sortedLeft = mergeSort(leftSide);
            const sortedRight = mergeSort(rightSide);
            return merge(sortedLeft,sortedRight);
        }
    }


    const array = [9,1,2,5,3,8,4,6,7,10]; 


    console.log(mergeSort(array)); //[1,2,3,4,5,6,7,8,9,10]
