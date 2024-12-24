import { buildPuppeteer } from './puppeteerConfig.js'
import scrapeHouzz from './scrapers/houzz.mjs'
import { parseHouzz } from './parsers/houzz.js'
import {delay} from './utils.js'
import fs from 'fs'

export const handler = async (event, _context) => {
  const { url, viewport, test } = event

  const [browser, page] = await buildPuppeteer(url, viewport, test)

  const reviewsHtml = await scrapeHouzz(page)
  fs.writeFileSync('html.html', reviewsHtml, 'utf8');
  // await delay(4000)
  await browser.close()
  const reviews = parseHouzz(reviewsHtml)

  return reviews
};
