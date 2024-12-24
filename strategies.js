import scrapeHouzz from './scrapers/houzz.mjs'
import parseHouzz from './parsers/houzz.js'

export const selectStrategy = (type) => {
  switch(type) {
    case 'houzz':
      return [scrapeHouzz, parseHouzz]
  }
}
