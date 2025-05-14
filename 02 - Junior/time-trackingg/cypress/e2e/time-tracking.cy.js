describe("Time tracking", () => {
    beforeEach(() => {
        cy.viewport(1440, 900);
        cy.visit("http://localhost:5173/");
    });

    it("Verificar que la tarjeta del usuario este visible y sus respectivos botones", () => {
        cy.get(".user-card").should("be.visible");
        cy.get(".user-name span").should("contain.text", "Jeremy Robson");
        cy.get(".user-data img").should("have.attr", "src").and("include", ".");
    });

    it("Cambia el botón activo al hacer clic", () => {
        cy.get(".time-tracking button").contains("Daily").click();
        cy.get(".time-tracking button").contains("Daily").should("have.class", "active");
        cy.get(".time-tracking button").contains("Weekly").should("not.have.class", "active");

        cy.get(".time-tracking button").contains("Monthly").click();
        cy.get(".time-tracking button").contains("Monthly").should("have.class", "active");
        cy.get(".time-tracking button").contains("Daily").should("not.have.class", "active");
    });

    it("Debe mostrar tarjetas de actividades", () => {
        cy.get(".card").should("have.length.at.least", 6);
    });

    it("Funciona el responsive", () => {
        cy.viewport(390, 844); 
        cy.get(".user-card").should("be.visible");  
    });

})