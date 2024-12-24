import { handler } from './index.mjs';

const URLS = {
  chromeHeadless: 'https://arh.antoinevastel.com/bots/areyouheadless',
  etsy: 'https://www.etsy.com/shop/lolabeanjewelry/reviews',
  houzz: 'https://www.houzz.com/professionals/appliances/aj-madison-pfvwus-pf~1887771251',
  houzzFlooring: 'https://www.houzz.com/professionals/flooring-contractors/mysha-s-flooring-company-pfvwus-pf~1796818102'
}

// const LOCAL_URLS = {
//   etsy: 'http://localhost:8000/etsy.html'
// }

const event = {
  url: URLS.houzzFlooring,
  type: 'houzz',
  viewport: 'mobile',
  test: false,
}

// const runFromFile = () => {
//   const { default: fs } = await import("fs")
//   const { default: jsdom } = await import("jsdom")
//   const { JSDOM } = jsdom

//   const html = fs.readFileSync('html.html', 'utf8')
//   const dom = new JSDOM(html);
// }

const context = {}
console.log(await handler(event, context));

