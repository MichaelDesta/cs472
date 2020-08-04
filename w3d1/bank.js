class Bank{
    constructor(){
        this.account=[];
        this.nextNumber=1;
    }
    



    addAccount(){
        this.account.push(new Account(this.nextNumber));
        return this.nextNumber++;
    } 

    addSavingsAccount(interest){
        let save=new Savingsaccount(this.nextNumber);
        save.deposit(1000);
       
        if(!interest){
            save.setInterest(interest);
        }
        this.account.push(save);
        return this.nextNumber++;

    }

    addCheckingAccount(overdraft) {
        let check=new CheckingAccount(this.nextNumber);

        check.deposit(100);
        if(!overdraft){
            check.setOverdraft(overdraft);
        }
        this.account.push(check);
        return this.nextNumber++;

    }

    closeAccount(number){
      //  this.account.splice(number, 1);
      // could have used splice but it will remove the index and will affect change of account number of all subsequent accounts
        delete this.account[number];
        return number;
    }

    accountReport(){
        for(let i=0; i<this.account.length;i++){
            console.log(this.account[i].toString());
        }
    }

    endOfMonth(){
       
        for(let i=0; i<this.account.length; i++){
            
            console.log(this.account[i].endOfMonth());
        }
                          
    }

    toString(){
        return "Accounts"+this.account;
    }
}





