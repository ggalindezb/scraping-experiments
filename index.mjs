import { buildPuppeteer, wrapUpTest } from './puppeteerConfig.js'
import scrapeHouzz from './scrapers/houzz.mjs'
import parseHouzz from './parsers/houzz.js'

export const handler = async (event, _context) => {
  const { url, type, viewport, test } = event
  const [browser, page] = await buildPuppeteer(url, viewport, test)

  const html = await scrapeHouzz(page)
  const reviews = parseHouzz(html)

  if(test)
    await wrapUpTest(page, type, html)
  await browser.close()

  return JSON.stringify(reviews)
};
