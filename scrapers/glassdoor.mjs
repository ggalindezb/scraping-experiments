import puppeteer from 'puppeteer-extra';
import StealthPlugin from 'puppeteer-extra-plugin-stealth';

function delay(time) {
  console.log('Arbitrary delay')
   return new Promise(function(resolve) {
       setTimeout(resolve, time)
   });
}

async function setCookies(page) {
  const cookies = [
    { name: 'gdId', value: 'f0491d58-a2fa-4877-b4b9-c54331360d49' },
    { name: 'optimizelyEndUserId', value: 'oeu1715447576211r0.9430973278323338' },
    { name: 'uc', value: '8013A8318C98C517ACFABFE19A51EDA3727D55F7226F832E0E19C4417E01ED02C74A7D3C89E69D3F96EF26EA221CA766BABC24CC16F3558A35514C4E5C051799D83A835E39D5EFBE0690C6D7B57DDAF95889038D079CF9A8549D4AF0D0146DE0A973A5CEC94EAC2707CB87CBA86E848B6E0803369DB8D80A8C82035033B4D5B81F206BBD4F6157B6E26D2AEC93768879' },
    { name: 'trs', value: 'verificationEmail:activateAccountEmail:email:2024-05-11+10%3A20%3A46.079:undefined:undefined' },
    { name: 'indeedCtk', value: '1htkanpbmk2nq801' },
    { name: '_cfuvid', value: '4lijmV9RmUzjg8TjopdyX3XYCKb9T3HkfcUwiurOJNk-1721088247197-0.0.1.1-604800000' },
    { name: 'fpvc', value: '14' },
    { name: '_urc', value: '295398866' },
    { name: 'rttdf', value: 'true' },
    { name: 'gdsid', value: '1721067940662:1721089005146:4A764CA0D80CCCB39256C67AC558DB2E' },
    { name: 'AWSALB', value: 'wKQCdyJDtBjh81YwjH+dgtjA5L4obHCJl8/blquX+tQWDnEBI1wfIG+bxF57wln3UcTlT1dP1hVUeg5qXcfA4gvxHXEat46NNJuFtf8213SbmYvC7VEpnhK6Xzne' },
    { name: 'AWSALBCORS', value: 'wKQCdyJDtBjh81YwjH+dgtjA5L4obHCJl8/blquX+tQWDnEBI1wfIG+bxF57wln3UcTlT1dP1hVUeg5qXcfA4gvxHXEat46NNJuFtf8213SbmYvC7VEpnhK6Xzne' },
    { name: 'JSESSIONID', value: 'CD1052362F13D3AC67F71DF0ED9F6811' },
    { name: 'AFSID', value: 'MjZlMGViY2QtMDBhOS00YjQ4LTlkODktODU3MmExOTE0OGRj' },
    { name: 'asst', value: '1721089005.2' },
    { name: 'cass', value: '1' },
    { name: 'GSESSIONID', value: 'undefined' },
    { name: 'at', value: 's1oyIx3xjhRdOyaHh4094tot2RD1hMmxBIpGbErsx2I_ENfzIoGrIqoAfc13nzkp6ki61K_TLpBW5-RIXC0755cLd6jttVZyMl6aNAcnEARHJC3k_IkCJj4BN-ATryRvs8i7o3DTlgJvyO6Fi4U2l9R_r4SnweVJG5_twwULLOqHkWSkdihbSAo-Togtn5OxOqZdVRNFNt7N1y_X6-0HPnxaHPLlYtoE7oKAntOaGLnTYRGBHohkb7cOFXqvPm6CuMrg6Rh11dtNMoMLmUnzIz4uICjYmZoc5mjjNZjujTcbsJCu2VW1OKSmUhYCBHLlertHeTYp1B4uLCHPa8ZLxcIW7GLZJ31U4Bed6u06A9h0KqsJFtAuuLMGmK3p-uWrvLPVwgJSuZR3IJgLKo-KB3mARKsAzoRGakrYof0ig-jloWHKW-VVf_mGwy8DfGiutymwXxi_63HMEYvvpAIZ71qGUDLBSVEvHxLZYzXGW_9bUMMH0tsniF5hPwDnMM8tYytK8hoXOnxKBsr3kiZB_c6yWpoT9oO-pCzv2ei6OFTagzqTAS5nY-zKk12jU3ViKWXX-lUk-ZrU_cmSROz90LUqgVdPHL5E-NZwo9Z_LiNpljTcHGHyTVy6Q9j8VqEU1b_bA4YBjwPFxjdNBOGlVFZB1OYYPumLDJ-U55YR3ej2ds-JJGUOr7IcAX0IdWztYiPv8MHRK2MdoqhQcuo91W1mebjikTcbbH0025q1U4qivy4QGyFo07zffKqq6JCSYuwRrQpnw_ed1RrxURUE8b-4ftTKy4d1olT4UDUmV9gcvD4cInhQK2iLkrrGD0BiWzuTZ_LwkwxR93fPRdfWXSyDnOyQOpJjf9ThiqHUj1kGt5kGLeghBd2fXSDBh9OXAUvMIdGeL6BfRZCi' },
    { name: 'alr', value: 'https%3A%2F%2F10minutemail.com%2F' }
  ]
  await page.setCookie(...cookies);
}

(async () => {
  puppeteer.use(StealthPlugin());
  const browser = await puppeteer.launch({headless: false});
  const page = await browser.newPage();

  const url = 'https://www.glassdoor.com.mx/Evaluaciones/AJ-Madison-Evaluaciones-E699874.htm?countryRedirect=true'
  await page.goto(url);
  await page.setViewport({width: 1080, height: 1024});
  await setCookies(page);
  await page.reload({ waitUntil: ["networkidle0", "domcontentloaded"] });

  console.log('Beginning manipulation')
  await page.locator('[data-test=FilterChips]>div>button').click();
  console.log('Undone time filter')

  console.log('Clicking filters')
  await page.locator('[data-test=ContentFiltersFilterToggleBtn]').click();
  console.log('Waiting for dropdown...')
  await page.locator('[data-test=ContentFiltersIdiomaDropdownContent]').wait();
  console.log('Clicking dropdown...')
  await page.locator('[data-test=ContentFiltersIdiomaDropdownContent]').click();
  console.log('Clicking english...')
  await page.locator('#option_eng').click();
  console.log('Waiting for graph')
  await page.waitForRequest('https://www.glassdoor.com.mx/graph');
  console.log('Done')
  await delay(10000);

  await browser.close();
})();
