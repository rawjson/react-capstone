describe('Navigation', () => {
  it('should navigate to the reservation page', () => {
    // Start from the index page
    cy.visit('http://localhost:3000/');

    // Find a link with an href attribute containing "about" and click it
    cy.get('button[data-cy="nav-reservations"]').click();

    // The new url should include "/about"
    cy.url().should('include', '/reservations');

    // The new page should contain an h1 with "About page"
    cy.get('form').scrollIntoView();
  });
});

export {};
