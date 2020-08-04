class Savingsaccount extends Account{
    constructor(number){
        super(number);
        this._interest=5.0;
    }

    getInterest(){
        return this._interest;
    }
    
    setInterest(interest){
        this._interest=interest;
    }

    addInterest(){
        this.deposit(this.getBalance() * this._interest / 100);
    }
    

    endOfMonth() {
        return "Interest added SavingsAccount:"+ this.getNumber() +" balance: "+ this.getBalance() +"interest:"+ (this.getBalance() * this._interest / 100);
        
    }

    toString() {
        return "Account " + this._number + ": interest " + this._interest;
    }

}