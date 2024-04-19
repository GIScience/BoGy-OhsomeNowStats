import { Account } from './accounting';

describe('Account', () => {

  it(`initial balance = 0`, () => {
    const account = new Account();
    expect(account.balance).toEqual(0);
  });

  // Write tests for depositing and withdrawing money from an account

});
