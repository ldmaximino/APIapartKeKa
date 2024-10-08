import { httpResponse } from "../utils/httpResponse.js";
import { logger } from "../utils/logger.js";

export default class GuestController {
    constructor() {}

    async getCodeAlarm(req, res, next) {
        try {
            return res.send({code: 'codealarm'});
        } catch (error) {
            next(error);
        }
    }
}