import { Router } from "express";
import { pingHandler } from "../controllers/index.controller.js";
import { invoiceRoutes } from "./invoice/index.route.js";

export const routes = () => {
    const router = Router();

    router.get("/ping", pingHandler);
    router.use("/invoice",invoiceRoutes())
    return router;
};
