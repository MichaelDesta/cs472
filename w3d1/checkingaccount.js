class CheckingAccount extends Account{
    constructor(number){
        super(number);
        this._overdraft=500;
    }

    getOverdraft(){
        return this._overdraft;
    }

    setOverdraft(overdraft){
        this._overdraft=overdraft;
    }

    withdraw(amount) {
       

        
        if (amount > (this.getBalance() + this._overdraft)) {
            
            throw Error("Insufficient funds");
        }

        if(amount>this.getBalance()){
            this._overdraft=this._overdraft-amount-this.getBalance();
            return ;
        }

        if (amount < (this.getBalance() + this._overdraft)){
            super.withdraw(amount);
        }
      }

      endOfMonth(){
         
          if(this.getBalance()==0){
              return "Warning, low balance CheckingAccount: "+ this.getNumber() +"balance: "+ this.getBalance()+" overdraft limit:"+this._overdraft;
          }
          else{
              return "";
          }
    }

      toString() {
        return "Account " + this.getNumber()+ ": overdraft " + this._overdraft;
    }
}