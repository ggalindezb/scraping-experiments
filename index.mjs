import puppeteer from 'puppeteer-extra';
import StealthPlugin from 'puppeteer-extra-plugin-stealth';
import { S3 } from "@aws-sdk/client-s3";
import { fromEnv } from "@aws-sdk/credential-providers";
import crypto from "crypto";

import scrapeHouzz from './houzz.mjs';

const scrapers = {
  houzz: scrapeHouzz
}

export const handler = async (event, context) => {
  const { url, type } = event;

  // puppeteer.use(StealthPlugin());
  // const browser = await puppeteer.launch({headless: false});
  // const page = await browser.newPage();

  // await page.setViewport({width: 412, height: 915});
  // await page.goto(url);
  // const html = await scrapers[type](page);
  // await browser.close();
  const html = '<html><body><p>123</p></body></html>'

  const s3Client = new S3({
    region: "us-east-1",
    credentials: fromEnv()
  });

  const fileName = 'Sample.html';
  const input = {
    Bucket: process.env.S3_BUCKET,
    Key: fileName,
    Body: html
  };
  await s3Client.putObject(input);

  return {
    pageSourceUrl: `https://${process.env.S3_BUCKET}.s3.amazonaws.com/${fileName}`
  };
};
