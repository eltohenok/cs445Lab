let bankAccount = { 
	money:Number 2000, 
	deposit(value): void { 
		this.money += value; 
	} 
}; 
let myself: { 
	name: "Asaad", 
	bankAccount:any =bankAccount, 
	hobbies: ["Violin", "Cooking"] 
}; 

myself.bankAccount.deposit(3000)); 
console.log(myself);