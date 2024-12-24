import puppeteer from 'puppeteer-extra';
import StealthPlugin from 'puppeteer-extra-plugin-stealth';

const fetchViewport = (viewport = 'mobile') => {
  const viewports = {
    mobile: [
      {
        width: 412,
        height: 915
      },
      {
        width: 1242,
        height: 2688
      }
    ]
  }

  const selectedViewport = viewports[viewport]

  return selectedViewport[Math.floor(Math.random() * selectedViewport.length)]
}

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

export const buildPuppeteer = async (url, viewport, test) => {
  puppeteer.use(StealthPlugin());
  const browser = await puppeteer.launch(puppeteerConfig(test));
  const page = await browser.newPage();

  await page.setViewport(fetchViewport(viewport));
  await page.goto(url);

  return [browser, page];
}

export const postResults = async (url, html, test) => {
  const timestamp = new Date().toISOString();
  const label = `${url}_${timestamp}`
  const filename = label.replace(/https:\/\/|http:\/\//, '').replace(/[:&\?=]/, '').replace(/[\/.]/g, '-').replace(/[:]g/)

  return filename;
}
