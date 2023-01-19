//This is test
describe("helloWorld", ()=>{
    it("returns hello world", ()=>{
        var actual = hello();
        expect(actual).toBe("hello world");
    });
});


describe("suma", ()=>{
    it("return suma 5 si 3 = 8", ()=>{
        expect(add(5,3)).toEqual(8);
    });
}); 


describe("Suma reala", () =>{
    it("return sum 1.4 si 0.7 = 2.1", ()=>{
        expect(add(1.4,0.7)).toEqual(2.1);
    });
});


describe("inmultire", () =>{
    it("return sum 6 si 7 = 42", ()=>{
        expect(inm(6,7)).toEqual(42);
    });
});