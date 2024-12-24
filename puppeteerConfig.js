import puppeteer from 'puppeteer-extra';
import StealthPlugin from 'puppeteer-extra-plugin-stealth';
import fs from 'fs/promises'

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
      devtools: true
    }
  } else {
    return {}
  }
}

export const buildPuppeteer = async (url, viewport, test) => {
  puppeteer.use(StealthPlugin());
  const browser = await puppeteer.launch(puppeteerConfig(test))
  const page = await browser.newPage()

  await page.setViewport(fetchViewport(viewport))
  await page.goto(url)

  return [browser, page]
}

function writeHtmlFile(label, html) {
  fs.writeFile(`${label}.html`, html, 'utf-8')
}

async function saveScreenshots(label, page) {
  await page.screenshot({ path: `${label}.png`, fullPage: true })
}

export const wrapUpTest = async (page, type, html) => {
  const timestamp = new Date().toISOString()
  const label = `${type}_${timestamp}`

  await saveScreenshots(label, page)
  writeHtmlFile(label, html)
}
