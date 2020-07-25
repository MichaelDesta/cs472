function max(a,b){
    if(a>b){
        return a;
    }
    else{ return b;}
}
//
function isVowel(c){
    if(c=='a'|| c=='o'||c=='e'||c=='u'||c=='i'){
        return true;
    }
    else{return false;}

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
function sum(arr=[]){
    let sum=0;
    for(let i=0; i<arr.length; i++){
        sum=sum+arr[i];

    }

    return sum;
}
function product(arr=[]){
    let product=1;
    for(let i=0;i<arr.length;i++){
        product=product*arr[i];
    }
    return product;
}
//
function reverse(str){
    let rev='';
    for(let i=str.length-1;i>=0;i--){
        rev=rev+str.charAt(i);
    }
    return rev;
}
//
function findLongestWord(arr=[]){
    let longest;
    let len=0;
    for(let i=0; i<arr.length;i++){
        if(arr[i].length>len){
            len=arr[i].length;
            longest=arr[i];
        }

    }

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
console.log("Expected output of max(20,10) is 10 and  " +myFunctionTest( 20,max(10,20)));
console.log("Expected output of isVowel(d) is false and  " +myFunctionTest(false,isVowel('d')));
console.log("Expected output of maxOfThree(35,20,10) is 35 and  " +myFunctionTest( 35,max(35,10,20)));
console.log("Expected output of sum(1,2,3,4) is 10 and  " +myFunctionTest(10,sum(1,2,3,4)));
 console.log("Expected output of product(1,2,3,4) is 24 and  " +myFunctionTest(24,product(1,2,3,4)));
 console.log("Expected output of reverse('mike') is ekim and  " +myFunctionTest('ekim',reverse('mike')));
 console.log("Expected output of findLongestWord(['mike','sam','Johns','oh'])) is Johns and  "
  +myFunctionTest( 'Johns',findLongestWord(['mike','sam','Johns','oh'])));
  console.log("Expected output of filterLongWords(['aaa','computer','python','php'],5) is computer"
  + myFunctionTest('javascript',findLongestWords(['class','javascript','python','php'],5)));
  //
  console.log('USING THE console.assert testing method, if test successed no message');
  console.assert(myFunctionTest(20,max(10,20))=='TEST SUCCEESSED', 'YOUR TEST IS FAILED');
  console.assert(myFunctionTest( true,isVowel('d')=='TEST SUCCEESSED','YOUR TEST IS FAILED'));
  console.assert( myFunctionTest( 35,max(35,10,20))=='TEST SUCCEESSED','YOUR TEST IS FAILED');
//   console.assert( myFunctionTest( 14,sum(2,3,4,5))=='TEST SUCCEESSED','YOUR TEST IS FAILED');
//   console.assert(myFunctionTest( 24,product(1,2,3,4))=='TEST SUCCEESSED','YOUR TEST IS FAILED');
  console.assert( myFunctionTest( 'ekim',reverse('mike'))=='TEST SUCCEESSED','YOUR TEST IS FAILED');
  console.assert(myFunctionTest( 'Johns',findLongestWord(['mike','sam','Johns','oh']))=='TEST SUCCEESSED','YOUR TEST IS FAILED');
 // console.assert(myFunctionTest('javascript',findLongestWords(['class','javascript','python','php'],5))=='TEST SUCCEESSED','YOUR TEST IS FAILED');
 