class AccountModel {
  constructor(data = {}) {
    this.balance = data.balance;
    this.pending_charges = data.pending_charges;
    this.last_payment_date = data.last_payment_date;
    this.last_payment_amount = data.last_payment_amount;
  }
}

module.exports = AccountModel;
