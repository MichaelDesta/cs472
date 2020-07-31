

//Q- 1
String.prototype.filter = function(banned){

    if(this.includes(banned)){
      let str=this.toString();
      this.toString=str.replace(banned,"");
    }
      return this.toString;
  }
  console.log("This house is not nice!".filter('not'));

//Q- 2
  
  
Array.prototype.bubbleSort = function() 
{
var is_sorted = false;
 while (!is_sorted) 
 {
    is_sorted = true;
    for (var n = 0; n < this.length - 1; n++) 
    {
      if (this[n] > this[n+1]){
        var x = this[n+1];
        this[n+1] = this[n];
        this[n] = x;
        is_sorted = false;
      }
    }
  }
  return this;
};

console.log([5,1,7, 23,-20,1].bubbleSort());

  //Q- 3
  
  var Person = function() {};
  
  Person.prototype.initialize = function(name, age)
  {
      this.name = name;
      this.age = age;
  }
  
  //  create the class Teacher and a method teach
  
  var Teacher=function() {};
  Teacher.prototype = new Person();
  
  Teacher.prototype.teach=function(subject)
  {
  
      console.log(this.name + " is now teaching " + subject);
      return this.name + " is now teaching " + subject;
  }
  
  var Mike = new Teacher();
  
    Mike.initialize("Mike", 39);
    Mike.teach("WAP");
  
  
  
  
  
  
  
  
  