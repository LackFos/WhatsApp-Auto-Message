import puppeteer from "puppeteer";
import sentMessage from "./SentMessage.js";

(async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  await page.goto("https://web.whatsapp.com");

  const checkStatus = setInterval(async () => {
    const onLandingPage = await page.$(".landing-wrapper");

    if (!onLandingPage) {
      clearInterval(checkStatus);
      sentMessage(page);
    }
  }, 1000);
})();
