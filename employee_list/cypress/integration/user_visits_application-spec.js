describe("user visits the application", () => {
  before(() => {
    cy.intercept("GET", "*/users**", { fixture: "users.json" });
    cy.visit("/");
  });
  it("is expected to display title", () => {
    cy.get("[data-testid=header]").should(
      "contain.text",
      "Employee Management"
    );
  });

  describe("Employee list section", () => {
    it("is expected to display 4 employees", () => {
      cy.get("[data-testid=employee-list").children().should("have.length", 4);
    });

    it('is expected to retun Thomas as first employee in list', () => {
        cy.get('[data-testid=employee-list]')
        .children()
        .first()
        .should('contain.text', 'Thomas Bluth');  
        .next()      
        .should('contain.text', 'Janet Weaver');
    });
  });
});
