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

        test('putIn should work', () => {
            expect(myATM.getBalance()).toBe(3000);
            myATM.putIn(500);
            expect(myATM.getBalance()).toBe(3500);
        });
    });
    describe('tests for the payBills method', () => {
        let myATM;
        beforeEach(() => {
            myATM = new ATM(3000);
        });

        test('balance should be 3000', () => {
            expect(myATM.getBalance()).toBe(3000);
        });

        test('payBills should work', () => {
            expect(myATM.getBalance()).toBe(3000);
            myATM.payBills();
            expect(myATM.getBalance()).toBe(3000 - myATM.bills);
        });

        test('payBills() x2 should work', () => {
            expect(myATM.getBalance()).toBe(3000);
            myATM.payBills();
            myATM.payBills();
            expect(myATM.getBalance()).toBe(3000 - (2 * myATM.bills));
        });
    });
});
