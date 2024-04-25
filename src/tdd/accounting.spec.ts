import {Account} from './accounting';

describe('Account', () => {

    it(`initial balance = 0`, () => {
        const account = new Account();
        expect(account.balance).toEqual(0);
    });


    it('should correctly add multiple deposits', () => {  // wird das geld hinzugefügt?
        const account = new Account();
        account.deposit(100); //  100 überwiesen
        expect(account.balance).toBe(100); //erwartung = 100$

        account.deposit(50); // nochmal mal 50
        expect(account.balance).toBe(150); //erwartung = 150$

    });

    it('richtige subtraktion', () => {  // wird das geld Abgezogen?
        const account = new Account();

        // Ein Anfangsbetrag wird eingezahlt
        account.deposit(200);
        expect(account.balance).toBe(200); // Erwarteter Kontostand: 200

        // Ein erster Betrag wird abgehoben
        account.withdraw(50);
        expect(account.balance).toBe(150); // Erwarteter Kontostand: 150


        account.withdraw(100);
        expect(account.balance).toBe(50); // Erwarteter Kontostand: 50


        account.withdraw(25);
        expect(account.balance).toBe(25); // Erwarteter Kontostand: 25
    });

    it('Nicht mehr nehemen als man hat', () => {  //wird mehr als möglich abgezogen?
        const account = new Account();
        account.deposit(200);


        expect(() => {
            account.withdraw(100);
        }).not.toThrow(); // Erwartung: keine Ausnahme sollte ausgelöst werden

    });
});







