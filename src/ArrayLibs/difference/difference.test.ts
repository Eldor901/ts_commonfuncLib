import { difference } from './difference';

describe('simpple  difference function check', () => {
    test('check numbers for difference', () => {
        expect(difference<number>([1,2], [2,3])).toEqual([1]);
    });
    test('check strings', () => {
        expect(difference<string>(['a','b'], ['a','d'])).toEqual(["b"]);
    });

    test('first argument empty array', () => {
        expect(difference<string>([], ['a','d'])).toEqual([]);
    });

    test('second argument empty array', () => {
        expect(difference<string>(['a', 'b'], [])).toEqual(['a', 'b']);
    });


})