import { createInvoiceDataSvc } from "../services/invoice.svc.js";
import { generateInvoicePdf } from "../utils/index.utils.js";

export const createInvoice = async (req, res) => {
  const data = req.body;

  const invoiceData = createInvoiceDataSvc(data);

  const invoiceNumber = data?.invoice?.invoiceDetails?.invoiceNumber;
  const pdf = await generateInvoicePdf(invoiceData, invoiceNumber);

  if (!pdf) {
    return res.status(500).json({ message: "Error generating invoice" });
  }

  res.setHeader("Content-Type", "application/pdf");
  res.setHeader(
    "Content-Disposition",
    `attachment; filename=${invoiceNumber}.pdf`
  );
  res.send(pdf);
};
