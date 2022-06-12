const 
mathOperations = require('./calculator');

describe("all test",()=>{
    test('adding 1+2 should return 3',()=>{
        var result = mathOperations.Sum(1,2)
        expect(result).toBe(3);
    });
    test('subtracting 3 from 8 should return 5',()=>{
        var result = mathOperations.Diff(8,3)
        expect(result).toBe(5);
    });
    test('multiplying 5 and 2 should return 10',()=>{
        var result = mathOperations.Product(5,2)
        expect(result).toBe(10);
    });
})
