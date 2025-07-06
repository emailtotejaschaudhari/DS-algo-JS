console.log("hello world")

//fibonachi 

function findFibonachisequence(num) {
    let seq = [0, 1];
    if (num< 3) {
        return console.log(seq)
    }
    for (let i = 2; i < num; i++) {
        seq[i] = seq[i - 1] + seq[i - 2]
    }
    return console.log(seq)
}

// findFibonachisequence(2)
// findFibonachisequence(4)
// findFibonachisequence(5)


function findFibonachisequenceRecurrsive(num) {
    let seq = [0, 1];
    if (num< 2) {
        return num
    }
    
    return findFibonachisequenceRecurrsive(num-1) + findFibonachisequenceRecurrsive(num-2)
}


console.log(findFibonachisequenceRecurrsive(2))
console.log(findFibonachisequenceRecurrsive(4))
console.log(findFibonachisequenceRecurrsive(5))




function factorialOfnumber(num){
    if(num === 0){
        return 1
    }
    return  num * factorialOfnumber(num-1)
}


// console.log(factorialOfnumber(5))


function isPrimeNumber(num){
    if(num<2){
        return false
    }

    for(let i=2; i<=Math.sqrt(num) ; i++){
        if(num%i === 0){
            return false
        }
    }
    return true
}

// console.log(isPrimeNumber(5))
// console.log(isPrimeNumber(4))


function isPoweroftwo(num){
    if(num <1){
        return false
    }

    while(num>1){
        if(num%2 != 0){
            return false
        }
        num = num/2
    }
    return true
}

console.log(isPoweroftwo(4))
console.log(isPoweroftwo(5))



/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {

    let left=0;
    let right =0;
    let obj={}
    let result = 0;

    while(right < s.length){

        if(obj[s[right]]){
            delete obj[s[left]]
            left++
        }
        else{
            let lenght = right- left +1;
            result = Math.max(result,lenght);

            obj[s[right]] =1;
            right++


        }
    }

    return result

    
};

let s = "abcabcbb"

// console.log(lengthOfLongestSubstring(s))



function binarySearch(arry,target){
    let leftIndex = 0;
    let rightIndex = arry.length-1;
    let middle;

    while(leftIndex<=rightIndex){
        middle = Math.floor((leftIndex+rightIndex)/2)
        if(target === arry[middle]){
            return  middle
        }
        else if(target > arry[middle]){
            leftIndex = middle+1;
        }else{
            rightIndex=middle+1
        }
    }

    return -1
}

// console.log(binarySearch([2,4,6,8,9],9))


function binarySearchRecurrsive(arry,target,left,right){

    return search(arry,target,0,arry.length-1)
  
}

function search(arry,target,left,right){
     if(left>right){
    return -1
   }

  
     middle = Math.floor((left+right)/2)

        if(target === arry[middle]){
            return  middle
        }
        else if(target > arry[middle]){
          return   search(arry,target,middle+1,right)
          
        }else{
             return   search(arry,target,left,middle-1)
        }
}

// console.log(binarySearchRecurrsive([2,4,6,8,9],9))

function bubleSort(arr){
    let isSwapped ;
      do{  
         isSwapped = false;
        for(let i=0; i<arr.length-1; i++){
            if(arr[i+1] < arr[i]){
                let temp = arr[i+1];
                arr[i+1] = arr[i];
                arr[i] = temp;
                isSwapped=true;
            }
        }
    }while(isSwapped)

    return  arr
}

// console.log(bubleSort([-4,-6,6,4,3]))s

function insertionSort(arr){

    for(let i= 1; i<arr.length; i++){
        let numbetoInsert = arr[i];//3 (4)
        let sortedelementIndex  = i-1;//-4,(1)
        while(sortedelementIndex>=0 && arr[sortedelementIndex] > numbetoInsert){
            arr[sortedelementIndex+1]= arr[sortedelementIndex];
            sortedelementIndex = sortedelementIndex -1
        }
        arr[sortedelementIndex +1] =  numbetoInsert;
    }
    return arr
}

console.log(insertionSort([-4,-6,6,4,3]))//[-6,-4,3,4,6]


function insertionsortagian(arr){

    for(let i=1; i<arr.length; i++){
        let numertoinsert = arr[i];
        let j = i-1;
        while(j>=0 && arr[j]>numertoinsert){
            arr[j+1]= arr[j];
            j= j-1
        }
        arr[j+1]= numertoinsert
    }
    return arr
}

// console.log(insertionsortagian([-4,-6,6,4,3]))




function quickSort(arr){

    if(arr.length <=1 ){
        return arr
    }
    let pivot = arr[arr.length-1];
    let left=[];
    let right = [];
    for(let i=0; i<arr.length-1; i++){

        if(arr[i]<pivot){
            left.push(arr[i])
        }else{
            right.push(arr[i])
        }

    }
    return [...quickSort(left),pivot,...quickSort(right)]
}




console.log(quickSort([-4,-6,6,4,3]))//[-6,-4,3,4,6]



function mergeSort(arr){

    if(arr.length <2){
        return arr
    }

    let middle = Math.floor(arr.length/2)

    let left = arr.slice(0,middle);
    let right = arr.slice(middle)

    return merge(mergeSort(left),mergeSort(right))
}

function merge(left,right){
    let sortedArry = [];
    while(left.length && right.length){
        if(left[0]<right[0]){
            sortedArry.push(left.shift())
        }else{
           sortedArry.push(right.shift()) 
        }
        
    }
    return[...sortedArry,...left,...right]
}
console.log(mergeSort([-4,-6,6,4,3]))