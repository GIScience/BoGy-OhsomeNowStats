export class Account {
    private _balance: number = 0;

    deposit(amount: number): void {
        this._balance = amount;
    }

    withdraw(amount: number): void {
        this._balance -= amount;
    }

    get balance(): number {
        return this._balance;
    }
}
