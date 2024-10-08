//Third party imports
import { Router } from "express";

//Local imports
import GuestController from "../controllers/guest_controller.js";

const guestController = new GuestController();
const router = Router();

//Get Code Alarm
router.get("/getalarm", guestController.getCodeAlarm);

export default router;