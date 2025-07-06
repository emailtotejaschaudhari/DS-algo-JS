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

console.log(binarySearchRecurrsive([2,4,6,8,9],9))