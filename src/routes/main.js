//Third party imports
import { Router } from "express";

//Local imports
import guestsRouter from "./guest_router.js";
import visitGuestRouter from "./visit-guest_router.js";

export default class MainRouter {
    constructor() {
        this.router = Router();
        this.init();
    }

    init() {
        this.router.use("/api/guest", guestsRouter);
        this.router.use("/api/visit", visitGuestRouter);
    }

    getRouter() {
        return this.router;
    }
}