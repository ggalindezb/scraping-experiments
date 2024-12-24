import { buildPuppeteer, wrapUpTest } from './puppeteerConfig.js'
import { selectStrategy } from './strategies.js';

export const handler = async (event, _context) => {
  const { url, type, viewport, test } = event
  const [browser, page] = await buildPuppeteer(url, viewport, test)
  const [scraper, parser] = selectStrategy(type)

  const html = await scraper(page)
  const reviews = parser(html)

  if(test)
    await wrapUpTest(page, type, html)
  await browser.close()

  return JSON.stringify(reviews)
};
