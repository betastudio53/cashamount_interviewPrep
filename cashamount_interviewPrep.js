
var CashAmount = function (value) {
	this.value = value;
}

CashAmount.prototype.totalInPennies = function () {
  return this.value*100;
}

CashAmount.prototype.addDoubleAmount = function (adder) {
  this.value = (this.value*100 + adder*100)/100;
}


//Test
// var cash = new CashAmount(0.10);
// console.log(cash.totalInPennies())
// console.log(cash)
// cash.addDoubleAmount(0.20);
// console.log(cash.totalInPennies() === 30)
