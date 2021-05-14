describe('its flaky', () => {
  Cypress._.times(5, (i) => {
    it(`T${i + 1}`, () => {
      expect(Math.random()).to.be.gt(.5)
    })
  })
})