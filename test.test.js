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
    });
});
