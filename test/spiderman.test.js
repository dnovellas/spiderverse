const Spiderman= require("./../app/spiderman")
// describe("Test Suite Dummy Description", () => {
//   test('Case 1 Dummy', () => {
//     const resultOfSomething = 1 + 2
//     expect(resultOfSomething).toBe(18);
//   });
// })

describe("Unit Test for Spiderman class", () => {
  test('Create an spiderman object', () => {   
    //Aquí escribimos el código que queremos usar tal cual
    // Quiero poder instanciar un objeto Spiderman con esta información
    const andrewGarfield = new Spiderman("Spiderman Sony", 31, "Andrew Garfield", 2, "Sony")

    // Validamos que este código funcione de la forma esperada
    expect(andrewGarfield.name).toBe("Spiderman Sony");
    expect(andrewGarfield.age).toBe(31);
    expect(andrewGarfield.actor).toBe("Andrew Garfield");
    expect(andrewGarfield.movies).toBe(2);
    expect(andrewGarfield.studio).toBe("Sony");
  });
})