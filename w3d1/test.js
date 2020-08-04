     
   


describe("Account Test", function(){
    let acc=new Account(1);
    
   
    it("Testing getNumber", function(){
        assert.equal(100, new Account(100).getNumber());
    });

    it("Testing deposit  ", function(){
        acc.deposit(300);
        assert.equal(300, acc.getBalance());
        
    });

    it("Testing with draw and getBalance", function(){
        acc.withdraw(100);
        assert.equal(200, acc.getBalance());
        
    });
        
});


describe("Saving Account Test", function(){

    let saving=new Savingsaccount(2);

    it("Testing getInterest ", function(){
        assert.equal(5, saving.getInterest());
    });

    it("Testing setInterest ", function(){
        saving.setInterest(7);
        assert.equal(7, saving.getInterest());
    });

    it("Testing addInterest ", function(){
        saving.deposit(250);
        saving.addInterest();

        assert.equal(267.5, saving.getBalance());
    });

    it("Testing endOfMonth ", function(){
        assert.equal("Interest added SavingsAccount:"+ saving.getNumber() +" balance: "+ saving.getBalance() +"interest:"+ (saving.getBalance() * saving._interest / 100),saving.endOfMonth());
    });
})


describe("Checking Account Test", function(){

    let checking=new CheckingAccount(3);

    it("Testing getOverdraft ", function(){
        
        assert.equal(500, checking.getOverdraft());
    });

    it("Testing setOverdraft", function(){
        checking.setOverdraft(750);
        checking.withdraw(500); 
        assert.equal(250, checking.getOverdraft());
    });

    it("Testing endOfMonth", function(){
               
        assert.equal("Warning, low balance CheckingAccount: "+ checking.getNumber() +"balance: "+ checking.getBalance()+" overdraft limit:"+checking._overdraft, checking.endOfMonth());
    });

})








describe("Bank  Test", function(){
    
    let bank=new Bank();

    it("Testing addAccount", function(){
               
        assert.equal(1, bank.addAccount());
    });

    it("Testing addSavingsAccount ", function(){
               
        assert.equal(2, bank.addSavingsAccount(6));
    });

    it("Testing addCheckingAccount ", function(){
               
        assert.equal(3, bank.addCheckingAccount(650));
    });
    
    it("Testing closeAccount ", function(){
               
        assert.equal(2, bank.closeAccount(2));
    });
})