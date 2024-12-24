import { S3 } from '@aws-sdk/client-s3'
import { fromEnv } from '@aws-sdk/credential-providers'
import crypto from 'crypto'
import fs from 'fs'

export function delay(time) {
   return new Promise(function(resolve) {
       setTimeout(resolve, time)
   });
}

export function debug(page) {
   return new Promise(function(_resolve) {
       page.evaluate(() => {
         debugger;
       });
   });
}

export const postResults = async (type, html, test) => {
  const timestamp = new Date().toISOString();
  const label = `${type}_${timestamp}`
  const filename = label.replace(/https:\/\/|http:\/\//, '').replace(/[:&\?=]/, '').replace(/[\/.]/g, '-').replace(/[:]g/)

  return filename;
}

export async function pushToS3(text) {
  const s3Client = new S3({
    region: "us-east-1",
    credentials: fromEnv()
  });

  const fileName = `${crypto.randomBytes(16).toString('hex')}`;
  const input = {
    Bucket: process.env.S3_BUCKET,
    Key: fileName,
    Body: text
  };

  await s3Client.putObject(input);

  return `https://${process.env.S3_BUCKET}.s3.amazonaws.com/${fileName}`
}
