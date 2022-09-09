const sayHello = require("../src/utils/sayHello");

describe("Hello testes", () => {
    it("say Hello World!", () => {
        const response = sayHello();

        expect(response).toBe('Hello World!');
    });
    
    it("say Hello Dev!", () => {
        const response = sayHello("Dev");

        expect(response).toBe('Hello Dev!');
    })
})