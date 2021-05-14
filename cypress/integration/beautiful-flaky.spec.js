describe('its flaky', {
  retries: 2
}, () => {
  // Cypress._.times(5, (i) => {
  //   it(`T${i + 1}`, () => {
  //     expect(Math.random()).to.be.gt(.5)
  //   })
  // })

  it('is deterministic', () => {})
})