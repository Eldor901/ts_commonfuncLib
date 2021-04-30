import { chunk } from './chunk';

describe('simpple array check', () => {
    test('check array length 4 devide size 2', () => {
        expect(chunk([1,2, 3,4], 2)).toEqual([[1,2], [3, 4]]);
    });

    test("check array length devide size 1" , () => {
        expect(chunk([1,2,3], 1)).toEqual([[1], [2], [3]])
    })

    test("check devide size equal to array length", ()=> {
        expect(chunk([1,2,3,4,5], 5)).toEqual([[1,2,3,4,5]])
    })

    test("check devide size more than array length", ()=> {
        expect(chunk([1,2,3,4], 5)).toEqual([[1,2,3,4]])
    })
})