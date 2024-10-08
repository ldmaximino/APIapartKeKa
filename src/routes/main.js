//Third party imports
import { Router } from "express";

//Local imports
import guestsRouter from "./guest_router.js";

export default class MainRouter {
    constructor() {
        this.router = Router();
        this.init();
    }

    init() {
        this.router.use("/api/guest", guestsRouter);
    }

    getRouter() {
        return this.router;
    }
}