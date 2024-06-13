import { Router } from "express";
import { createInvoice } from "../../controllers/invoice.controller.js";
import { invoiceValidator } from "../../middlewares/invoice.middleware.js";

export const invoiceRoutes = () => {
    const router = Router();

    router.post("/create", invoiceValidator, createInvoice);
    return router;
};
