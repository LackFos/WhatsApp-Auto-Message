import fs from "fs";
import config from "./config.js";

export default async function (page) {
  const file = fs.readFileSync("src/contact.txt", "utf-8");
  const contacts = file.split(",");
  const message = config.message;

  for (const c of contacts) {
    const contact = c.replace(/\D/g, "");
    await page.goto(
      `https://web.whatsapp.com/send?phone=${contact}&text=${message}`
    );

    await page.waitForNavigation();
    await page.waitForSelector("button.tvf2evcx", { visible: true });

    const sentButton = await page.$("button.tvf2evcx");
    await page.waitForTimeout(3000);
    await sentButton.click();
    await page.waitForTimeout(60000 / config.messagePerMinute);
  }

  console.log("Done..");
}
