const { BankAccount } = require("./BankAccount.js");

describe("BankAccount allows to despoit and withdraw money. It should also tell us the curent balance.", () => {
  it("should handle a normal use case", () => {
    const bankAccount = new BankAccount();
    bankAccount.deposit(100.53);
    bankAccount.withdraw(10);
    bankAccount.withdraw(7.95);
    bankAccount.withdraw(8.45);
    bankAccount.withdraw(4.13);

    expect(bankAccount.getBalance()).toBe(70.0);
  });

  it("should allow a negative balance", () => {
    const bankAccount = new BankAccount();
    bankAccount.deposit(10);
    bankAccount.withdraw(5);
    bankAccount.withdraw(10);

    expect(bankAccount.getBalance()).toBe(-5);
  });

  it("should works with an empty account", () => {
    const bankAccount = new BankAccount();
    expect(bankAccount.getBalance()).toBe(0);
  });
});
