describe("my functional test",function(){
    it("it sums the elements ",function(){
        assert.equal(10,sum([1,2,3,4]));
    });
    it("finds product of numbers",function(){
     assert.equal(24,product([1,2,3,4]));
    });
    it("finds reversed form of string", function(){
        assert.equal('ekim',reverse('mike'));
    });
    it("finds longest word",function(){
        assert.equal('Johns',findLongestWord(['mike','sam','Johns','oh']));
    });
    it("finds longest WORDS form array of words",function(){
        let a=['google', 'python'];
        assert.equal(a,findLongestWords(['class','google','python','php'],5).toString());
    });
});