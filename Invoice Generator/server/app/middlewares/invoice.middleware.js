import { body } from "express-validator";

const dateValidator = (value) => {
  if (!value) {
    throw new Error("Date should not be empty");
  }
  const [day, month, year] = value.split("/");

  if (isNaN(day) || isNaN(month) || isNaN(year)) {
    throw new Error("Day, month, and year should be numbers");
  }

  if (
    day < 1 ||
    day > 31 ||
    month < 1 ||
    month > 12 ||
    year < 1900 ||
    year > new Date().getFullYear()
  ) {
    throw new Error("Day, month, or year is out of range");
  }

  const date = new Date(year, month - 1, day);
  if (date.getMonth() != month - 1) {
    throw new Error("Invalid day for the given month");
  }

  return true;
};
export const invoiceValidator = [
  body("invoice.invoiceDetails.invoiceNumber", "invoiceNumber is invalid")
    .isAlphanumeric()
    .not()
    .isEmpty(),
  body(
    "invoice.invoiceDetails.invoiceDate",
    "invoiceDate is invalid. Format should be dd/mm/yyyy"
  ).custom(dateValidator),
  body("invoice.orderDetails.orderNumber", "orderNumber is invalid")
    .isAlphanumeric()
    .not()
    .isEmpty(),
  body("invoice.orderDetails.orderDate", "orderDate is invalid").custom(
    dateValidator
  ),
  body("invoice.totalAmount", "totalAmount is invalid")
    .isNumeric()
    .not()
    .isEmpty(),
  body("seller.sellerName", "sellerName is invalid").isAlpha().not().isEmpty(),
  body("seller.address", "address is invalid").not().isEmpty(),
  body("seller.panNo", "panNo is invalid").isAlphanumeric().not().isEmpty(),
  body("seller.gstNo", "gstNo is invalid").isAlphanumeric().not().isEmpty(),
  body("buyer.billingName", "billingName is invalid").isAlpha().not().isEmpty(),
  body("buyer.billingAddress", "billingAddress is invalid").not().isEmpty(),
  body("buyer.billingStateCode", "billingStateCode is invalid")
    .isAlpha()
    .not()
    .isEmpty(),
  body("buyer.shippingName", "shippingName is invalid")
    .isAlpha()
    .not()
    .isEmpty(),
  body("buyer.shippingAddress", "shippingAddress is invalid").not().isEmpty(),
  body("buyer.shippingStateCode", "shippingStateCode is invalid")
    .isAlpha()
    .not()
    .isEmpty(),
  body("items.*.description", "description is invalid").not().isEmpty(),
  body("items.*.unitPrice", "unitPrice is invalid").isNumeric().not().isEmpty(),
  body("items.*.quantity", "quantity is invalid").isNumeric().not().isEmpty(),
  body("items.*.netAmount", "netAmount is invalid").isNumeric().not().isEmpty(),
  body("items.*.discount", "discount is invalid").isNumeric().not().isEmpty(),
  body("items.*.taxRate", "taxRate is invalid").isNumeric().not().isEmpty(),
  body("items.*.taxType", "taxType is invalid").isAlpha().not().isEmpty(),
  body("items.*.cgst", "cgst is invalid").isNumeric(),
  body("items.*.sgst", "sgst is invalid").isNumeric(),
  body("items.*.igst", "igst is invalid").isNumeric(),
  body("items.*.totalAmount", "totalAmount is invalid")
    .isNumeric()
    .not()
    .isEmpty(),
];
