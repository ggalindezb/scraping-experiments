export default async function scrapeHouzz(page) {
  await page.reload({ waitUntil: ["networkidle0", "domcontentloaded"] });
  await page.locator('[data-cta="Reviews"]').click();
  await page.locator('[data-container="Reviews"]').wait();

  return await page.$eval('.reviews-wrapper', element => element.outerHTML)
}
