import { launch } from "puppeteer";
import path, { dirname } from "path";
import ejs from "ejs";
import { fileURLToPath } from "url";
import fs from "fs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const generateInvoicePdf = async (data, invoiceNumber) => {
  const templatePath = path.join(__dirname, "../views/invoice.view.ejs");
  const outputPath = path.join(__dirname, `../invoices/${invoiceNumber}.pdf`);
        
  try {
    const html = await ejs.renderFile(templatePath, data);
    const browser = await launch({
      headless: true,
      args: ["--no-sandbox", "--disable-setuid-sandbox"],
    });
    const page = await browser.newPage();
    await page.setContent(html, { waitUntil: "load" });
    console.log("Content set");
    const dir = path.dirname(outputPath);
    fs.mkdirSync(dir, { recursive: true });
    const pdf = await page.pdf({
      path: outputPath,
      format: "A4",
      printBackground: true,
    });
    console.log("PDF generated");
    await browser.close();
    return pdf;
  } catch (error) {
    console.error(error);
  }
  return null;
};
