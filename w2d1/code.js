function sum(arr=[]){
    return arr.reduce((accumulator,current)=>accumulator+current);
}
   
//
function isVowel(c){
    if(c=='a'|| c=='o'||c=='e'||c=='u'||c=='i'){
        return true;
    }
    else{return false;
    }

}
//
function maxOfThree(a,b,c){
    if(a>b&&a>c){
        return a;
    }
    if(b>a&&b>c){
        return b;
    }
    else{
        return c;
    }
}
//

function product(arr=[]){
    return arr.reduce((acc,curr)=>acc*curr);
}
//
function reverse(str){
   return str.split("").reduce((rev,char)=>char+rev,'')
}
//
function findLongestWord(arr=[]){
    let longest=arr[0];
    let len=arr[0].length;
    const word=arr.filter(w=>{ if(w.length>len){
        longest=w;
        len=w.length;
        
    }});
    return longest;
}
//
function findLongestWords(arr=[], k){
    return arr.filter(a=>a.length>k);
    
}
function myFunctionTest(expected, result){
    if(expected===result){
        return 'TEST SUCCEESSED';
    }
    else{
        return 'TEST FAILED'+ ' expected '+expected+' result '+ result;
    }
}
//

console.log("Expected output of isVowel(d) is false and  " +myFunctionTest(false,isVowel('d')));
console.log("Expected output of maxOfThree(35,20,10) is 35 and  " +myFunctionTest( 35,max(35,10,20)));
console.log("Expected output of sum(1,2,3,4) is 10 and  " +myFunctionTest(10,sum([1,2,3,4])));
 console.log("Expected output of product(1,2,3,4) is 24 and  " +myFunctionTest(24,product([1,2,3,4])));
 console.log("Expected output of reverse('mike') is ekim and  " +myFunctionTest('ekim',reverse('mike')));
 console.log("Expected output of findLongestWord(['mike','sam','Johns','oh'])) is Johns and  "
  +myFunctionTest( 'Johns',findLongestWord(['mike','sam','Johns','oh'])));
console.log("Expected output of filterLongWords(['class','google','python','php'],5) is 'google'" 
  + myFunctionTest('google',findLongestWords(['class','google','python','php'],5)));
