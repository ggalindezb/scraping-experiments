import { pushToS3 } from './utils.js';
import { buildPuppeteer, postResults } from './puppeteerConfig.js'

export const handler = async (event, _context) => {
  const { url } = event;

  const [browser, page] = await buildPuppeteer(url, event.test);

  await page.locator('.reviews-list').wait();
  await page.waitForSelector('.reviews-list');
  const html = await page.content();
  await browser.close();

  const s3Url = await postResults(html, event.test)

  return {
    pageSourceUrl: s3Url
  };
};
