import { timeStamp, kFormatter } from './helperFunctions';

describe('timeStamp', () => {
    it('should return a relative time stamp', () => {
        const currentTime = Date.now() / 1000;
        const timeStampValue = timeStamp(currentTime);
        expect(timeStampValue).toEqual('a few seconds ago');
    });
});

describe('kFormatter', () => {
    it('should format number to be rounded with a "k" to one decimal point', () => {
        const num1 = 1234;
        const num2 = -1234;
        const num3 = 999;
        const num4 = -999;
        expect(kFormatter(num1)).toEqual('1.2k');
        expect(kFormatter(num2)).toEqual('-1.2k');
        expect(kFormatter(num3)).toEqual(999);
        expect(kFormatter(num4)).toEqual(-999);
    });
});