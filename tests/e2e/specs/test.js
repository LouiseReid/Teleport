// https://docs.cypress.io/api/introduction/api.html

// describe("My First Test", () => {
//   it("Visits the app root url", () => {
//     cy.visit("/");
//     cy.contains("h1", "Welcome to Your Vue.js App");
//   });
// });

describe("Home page", () => {
  it("renders home page", () => {
    cy.visit("/#/");
    cy.contains("h1", "How's the quality");
    cy.contains("span", "of life where");
    cy.contains("span", "you live");
  });

  xit("navigates to /cost on 'cost of living' button click", () => {
    cy.visit("/#/");
    cy.contains("Cost of Living").click();
  });

  xit("navigates to /standard on 'standard of living' button click", () => {
    cy.visit("/#/");
    cy.contains("Standard of Living").click();
  });
});

describe("Standard of Living", () => {
  xit("renders 266 cards", () => {
    cy.visit("/#/standard");
    cy.get("h3")
      .its("length")
      .should("eq", 266);
  });
});
