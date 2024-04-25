export class Account {
    private _balance: number = 0;

    deposit(amount: number): void {
        this._balance += amount;  // veränderung
    }

    withdraw(amount: number): void {
        if (amount > this._balance) {
            console.log("du hast kein Geld mehr"); // Überprüfung auf ausreichendes Guthaben
        }
        this._balance -= amount; // Abziehen des Betrags vom Kontostand
    }

    get balance(): number {
        return this._balance;
    }

// gefundene Fehler : /*
//this._balance = amount;  => this._balance += amount;
// wenn amount(Geld das man Abheben möchte) ist größer als das was man hat dann
}