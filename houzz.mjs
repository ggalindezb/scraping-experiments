export default async function scrapeHouzz(page) {
  await page.reload({ waitUntil: ["networkidle0", "domcontentloaded"] });

  await page.locator('[data-cta="Reviews"]').click();
  await page.locator('#reviews > div').wait();

  await page.reload({ waitUntil: ["networkidle0", "domcontentloaded"] });

  return await page.content();
}
