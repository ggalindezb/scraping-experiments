import { handler } from './index.mjs';

const URLS = {
  chromeHeadless: 'https://arh.antoinevastel.com/bots/areyouheadless',
  etsy: 'https://www.etsy.com/shop/lolabeanjewelry/reviews',
  houzz: 'https://www.houzz.com/professionals/appliances/aj-madison-pfvwus-pf~1887771251',
  houzzFlooring: 'https://www.houzz.com/professionals/flooring-contractors/mysha-s-flooring-company-pfvwus-pf~1796818102'
}

const [_proc, _file, type, test] = process.argv
const event = {
  url: URLS[type],
  type,
  viewport: 'mobile',
  test: test === 'test',
}
const context = {}
console.log(await handler(event, context));
