async function login(page, surname, smartcard, loginUrl) {
  await page.goto(loginUrl);

  await page.waitForNetworkIdle();

  // Fill in the login form
  await page.type('input[name="signIn_surnameOrMobile"]', surname);
  await page.type('input[name="signIn_smartCardNumber"]', smartcard);

  console.log('Filled all details...');

  await Promise.all([
    page.waitForNavigation(), // The promise to wait for navigation
    page.click('button#btnSignInWithEazy')
  ]);
  console.log("Successfully logged in");
}

async function getAvailableBalance(page) {
  const selector = '.package-balance-dtls .available-balance';

  await page.waitForSelector(selector);

  const balance = await page.$eval(selector, element => element.textContent);
  return balance.trim();
}

module.exports = { login, getAvailableBalance };
