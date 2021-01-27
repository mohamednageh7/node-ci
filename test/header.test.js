const Page = require('./helper/page')
let page;

beforeEach(async () => {
  page = await Page.build()
  await page.goto('http://localhost:3000');
});

test('The header has the correct text', async () => {
  const text = await page.getContentOf('a.brand-logo')
  await page.waitFor('a.brand-logo');
  expect(text).toEqual('Blogster');
});

test('Clicking login start OAuth flow', async () => {
  await page.click('.right a');
  const url = await page.url();
  expect(url).toMatch(/accounts\.google\.com/);
});

test('When signed in show log out button', async () => {
  await page.login()
  const text = await page.getContentOf('a[href="/auth/logout"]')

  expect(text).toEqual('Logout');
});

afterEach(async () => {
  await page.close();
});