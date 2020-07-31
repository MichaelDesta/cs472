describe("Testing All codes",function(){
   
    it("This house is not nice!, returns This house is nice!  ", function(){
        
        assert.equal("This house is  nice!","This house is not nice!".filter('not'));
    });

    
    
    it("[60,4,0, 3,-20,1] sort it and returns [-20,0,1,3,4,60]", function(){
        
        assert.equal('-20,0,1,3,4,6',([6,4,0,3,-20,1].bubbleSort().toString()))
    });
    
    
    
    it("given separate Mike and WAP,  and returns  Mike is now teaching WAP  ", function(){

        Person.prototype.initialize("Mike", 39);
        
        assert.equal("Mike is now teaching WAP",Teacher.prototype.teach("WAP"));
    });

    
});