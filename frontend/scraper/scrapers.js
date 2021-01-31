const puppeteer = require('puppeteer');

async function scrapeProduct(url) {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url);

    const [el] = await page.$x('//*[@id="vaccinations-banner-wrapper"]/div/div/div[2]/div/div/div');
    const txt = await el.getProperty('textContent');
    const rawTxt = await txt.jsonValue();

    console.log({rawTxt});
}

scrapeProduct("https://covid.cdc.gov/covid-data-tracker/#vaccinations");
