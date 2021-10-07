import {ATM} from './ATM'

describe('tests for the ATM class', () => {
    describe('tests for the constructor and withdraw methods', () => {
        let myATM;
        beforeEach(() => {
            myATM = new ATM(3000);
        });

        test('constructor should work', () => {
            expect(myATM).toBeInstanceOf(ATM);
            expect(myATM.getBalance()).toBe(3000);
        });

        test('withdraw should work', () => {
            expect(myATM.getBalance()).toBe(3000);
            myATM.withdraw(1000);
            expect(myATM.getBalance()).toBe(2000);
        });
    });
    describe('tests for the putIn method', () => {
        let myATM;
        beforeEach(() => {
            myATM = new ATM(3000);
        });

        test('balance should be 3000', () => {
            expect(myATM.getBalance()).toBe(3000);
        });
    });
});
