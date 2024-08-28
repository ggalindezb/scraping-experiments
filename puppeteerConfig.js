import puppeteer from 'puppeteer-extra';
import StealthPlugin from 'puppeteer-extra-plugin-stealth';

export const puppeteerConfig = (test) => {
  const testMode = test ?? false;

  if(testMode) {
    return {
      headless: false,
      slowMo: 250,
      devtools: true,
    };
  } else {
    return {};
  }
}

export const buildPuppeteer = async (url, test) => {
  puppeteer.use(StealthPlugin());
  const browser = await puppeteer.launch(puppeteerConfig(test));
  const page = await browser.newPage();

  await page.setViewport({width: 412, height: 915});
  await page.goto(url);

  return [browser, page];
}
