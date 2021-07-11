const puppeteer = require("puppeteer");

describe("Get Balance Test", () => {
  it("should work ok to show blance", async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    await page.goto("http://localhost:1234/");

    await page.setViewport({ width: 1920, height: 937 });

    await page.waitForSelector("body > #dialog > #content #address-input");
    await page.click("body > #dialog > #content #address-input");

    await page.waitForSelector(
      "body > #dialog > #content #show-balance-button"
    );
    await page.click("body > #dialog > #content #show-balance-button");

    await page.waitForSelector("body > #dialog > #content #address-input");
    await page.click("body > #dialog > #content #address-input");

    await page.waitForSelector(
      "body > #dialog > #content #show-balance-button"
    );
    await page.click("body > #dialog > #content #show-balance-button");

    await page.waitForSelector(
      "body > #dialog > #content #show-balance-button"
    );
    await page.click("body > #dialog > #content #show-balance-button");

    await page.waitForSelector("body");
    await page.click("body");

    await page.waitForSelector("body > #dialog > #content #address-input");
    await page.click("body > #dialog > #content #address-input");

    await page.waitForSelector(
      "body > #dialog > #content #show-balance-button"
    );
    await page.click("body > #dialog > #content #show-balance-button");

    await browser.close();
  });
});
