describe("Social media dashboard", () => {
  beforeEach(() => {
        cy.viewport(1440, 900);
        cy.visit("http://localhost:5173/");
    });

    it("Verificar que muestre el título correctamente", () => {
      cy.contains("Social Media Dashboard").should("be.visible");
    });

    it("Verificar que muestre el botón de dark mode", () => {
      cy.get(".dark-mode").should("be.visible");
    });

    it("Verificar que el botón funcione y se ponga oscuro", () => {
        cy.get("label.switch").click();
        cy.get('body').should("have.css", "background-color", "rgb(30, 32, 42)");

    })

    it("Verificar que estén presentes todas las tarjetas de followers", () => {
        cy.get(".card-followers").should("have.length", 4);
    });

    it("Verificar que estén presentes todas las tarjetas de overview", () => {
        cy.get(".card-overview").should("have.length", 8);
    });
});