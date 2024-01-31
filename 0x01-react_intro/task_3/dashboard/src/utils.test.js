import { getFullYear } from './utils';

describe('getFullYear', () => {
    it('returns the current year', () => {
        const currentYear = new Date().getFullYear();
        expect(getFullYear()).toEqual(currentYear);
    });
});

describe('getFooterCopy', () => {
    it('returns "Holberton School" when argument is true', () => {
        expect(getFooterCopy(true)).toEqual('Holberton School');
    });

    it('returns "Holberton School main dashboard" when argument is false', () => {
        expect(getFooterCopy(false)).toEqual('Holberton School main dashboard');
    });
});

describe('getLatestNotification', () => {
    it('returns the correct notification string', () => {
        expect(getLatestNotification()).toEqual('<strong>Urgent requirement</strong> - complete by EOD');
    });
});