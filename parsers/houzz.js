import jsdom from 'jsdom'
const { JSDOM } = jsdom

const selectors = {
  reviews: '.reviews-wrapper > .review-item',
  name: '.review-item__reviewer .hz-user-name',
  grade: '.review-item__reviewer .pro-rating span.sr-only',
  description: '.review-item__body .review-item__body-string',
  date: '.review-item__social .review-item__time-created'
}

const extractReview = (node) => {
  let name = node.querySelector(selectors.name).textContent.trim()
  let grade = node.querySelector(selectors.grade).textContent.match(/.*(\d).*(\d)/)[1].trim()
  let description = node.querySelector(selectors.description).textContent.trim()
  let date = node.querySelector(selectors.date).textContent.trim()
  console.log({ name, grade, description, date})

  return { name, grade, description, date}
}

export const parseHouzz = (html) => {
  const dom = new JSDOM(html);
  const reviewNodes = [...dom.window.document.querySelectorAll(selectors.reviews)]
  console.log(`nodes: ${reviewNodes.length}`)

  return reviewNodes.map(node => extractReview(node))
}
