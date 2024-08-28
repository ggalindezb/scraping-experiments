import { handler } from './index.mjs';

const URLS = {
  chromeHeadless: 'https://arh.antoinevastel.com/bots/areyouheadless',
  etsy: 'https://www.etsy.com/shop/lolabeanjewelry/reviews'
}

const LOCAL_URLS = {
  etsy: 'http://localhost:8000/etsy.html',
}

const event = {
  url: URLS.etsy,
  test: true,
}

const context = {}
console.log(await handler(event, context));
