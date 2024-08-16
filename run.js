import { handler } from './index.mjs';

const event = {
  url: 'https://www.houzz.com/professionals/appliances/aj-madison-pfvwus-pf~1887771251',
  type: 'houzz',
  config: {
    headless: false
  }
}

const context = {}
console.log(await handler(event, context));
