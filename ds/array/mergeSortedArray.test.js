const mergeSortedArrays = require('./mergeSortedArray');

describe('mergeSortedArrays works', () => {

    test('catches invalid input', () => {
        expect(mergeSortedArrays(2, [1])).toEqual('invalid input');
        expect(mergeSortedArrays('hello', [2])).toEqual('invalid input');
        expect(mergeSortedArrays([])).toEqual('invalid input')
        expect(mergeSortedArrays()).toEqual('invalid input')
    })

    test('properly merges sorted arrays', () => {
        expect(mergeSortedArrays([1, 4, 40], [7, 20, 80])).toEqual([1, 4, 7, 20, 40, 80])
    })

    test('works with different length arrays', () => {
        expect(mergeSortedArrays([1, 3, 60], [4, 8, 20, 57, 100, 148])).toEqual([1, 3, 4, 8, 20, 57, 60, 100, 148])
        expect(mergeSortedArrays([9, 20, 47, 90, 120], [1, 2, 3, 60])).toEqual([1, 2, 3, 9, 20, 47, 60, 90, 120])
    })

    test('handles duplicate numbers correctly', () => {
        expect(mergeSortedArrays([1, 1, 3, 4], [1, 2, 3, 4])).toEqual([1, 1, 1, 2, 3, 3, 4, 4])
    })

})