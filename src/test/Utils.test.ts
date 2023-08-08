import { StringUtils, getStringInfo, toUpperCase } from "../app/Utils";

describe('Utils test suite', () => {

    describe.only('StringUtils tests', () => {

        let sut: StringUtils;
        beforeEach(() => {
            sut = new StringUtils();
            console.log('Setup');
        })

        afterEach(() => {
            //* clearing mocks
            console.log('Teardown');
        })

        it.only('Should return correct upperCase', () => {

            const actual = sut.toUpperCase('abc');

            expect(actual).toBe('ABC');
            console.log('Actual test');

        })
        it('Should throw error on invalid argument - function', () => {
            function expectError() {
                const actual = sut.toUpperCase('');
            }
            expect(expectError).toThrow();
            expect(expectError).toThrowError('Invalid argument!');
        })
        it('Should throw error on invalid argument - arrow function', () => {
            expect(() => sut.toUpperCase('')).toThrow();
        })
        fit('Should throw error on invalid argument - arrow function', (done) => {
            try {
                sut.toUpperCase('');
                done('GetStringInfo should throw error for invalid arg!');
            } catch (err) {
                expect(err).toBeInstanceOf(Error);
                expect(err).toHaveProperty('message', 'Invalid argument!');
                done();
            }
        })
    })

    // it('should return uppercase of valid string', () => {
    //     //* arrange:
    //     const sut = toUpperCase;
    //     const expected = 'ABC';

    //     //* act:
    //     const actual = sut('abc');

    //     //* assert:
    //     expect(actual).toBe(expected);
    // });

    describe('ToUpperCase examples', () => {
        // it.each([
        //     { input: 'abc', expected: 'ABC' },
        //     { input: 'My-String', expected: 'MY-STRING' },
        //     { input: 'def', expected: 'DEF' },
        // ])('$input toUpperCase should be $expected', ({ input, expected }) => {

        //     const actual = toUpperCase(input);

        //     expect(actual).toBe(expected);

        // });
    })

    // describe('getStringInfo for arg My-String should', () => {
    //     test('return right length', () => {
    //         const actual = getStringInfo('My-String');
    //         expect(actual.characters).toHaveLength(9);
    //     });
    //     test('return right lower case', () => {
    //         const actual = getStringInfo('My-String');
    //         expect(actual.lowerCase).toBe('my-string');
    //     });
    //     test('return right upper case', () => {
    //         const actual = getStringInfo('My-String');
    //         expect(actual.upperCase).toBe('MY-STRING');
    //     });
    //     test('return right characters', () => {
    //         const actual = getStringInfo('My-String');
    //         expect(actual.characters).toEqual(['M', 'y', '-', 'S', 't', 'r', 'i', 'n', 'g']);
    //         expect(actual.characters).toContain<string>('M');

    //         expect(actual.characters).toEqual(
    //             expect.arrayContaining(['M', '-', 'y', 'i'])
    //         );
    //     });
    //     test('return defined extra info', () => {
    //         const actual = getStringInfo('My-String');
    //         expect(actual.upperCase).toBeDefined();
    //     });
    //     test('return right extra info', () => {
    //         const actual = getStringInfo('My-String');
    //         expect(actual.extraInfo).toEqual({});
    //     });

    // })




});