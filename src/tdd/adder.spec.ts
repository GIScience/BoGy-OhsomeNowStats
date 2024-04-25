import {add} from './adder';

describe('Adding Numbers', () => {

    it(`0 + 0 = 0`, () => {
        const sum = add(0, 0);
        expect(sum).toEqual(0);
    });

    it(`1 + 1 = 2`, () => {
        const sum = add(1, 1);
        expect(sum).toEqual(2);
    });

    it(`2 + 1 = 3`, () => {
        const sum = add(2, 1);
        expect(sum).toEqual(3);
    })
    it(`3 + 1 + 6 = 10`, () => {
        const sum = add(3, 1, 6);
        expect(sum).toEqual(10);
    })
});
