describe('Login flow', () => {
  it('should fill the e-mail', async () => {
    await element(by.id('loginInput')).typeText('me@joao.belem.br');
  });

  it('should fill the password', async () => {
    await element(by.id('passwordInput')).typeText('myawesomepassword');
    await element(by.id('toggleSecureEntry')).tap();
  });

  it('should tap login button', async () => {
    await element(by.id('submitButton')).tap();
  });
});
