describe('Edit User', () => {
  it('should view the user list', () => {
    cy.visit('users');
    cy.get('h1').contains('Users');
  });
  it.skip('should visit the edit screen for the first user', () => {
    cy.get('a#user-edit-link-1').click();
    cy.get('h1').contains('Edit User');
  });
  it.skip('should change the user name and save', () => {
    cy.get('input#first_name').scrollIntoView().clear().type('Orlando');
    cy.get('button').click();
    cy.get('h1').contains('Users');
  });
});
