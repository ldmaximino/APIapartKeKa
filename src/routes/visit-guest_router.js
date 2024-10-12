//Third party imports
import { Router } from "express";

//Local imports
import VisitGuestController from "../controllers/visit-guest_controller.js";

const visitGuestController = new VisitGuestController();
const router = Router();

//Get Code Alarm
router.post("/", visitGuestController.createVisit);
router.get("/getalarm", visitGuestController.getCodeAlarm);
router.get("/:id/allvisits", visitGuestController.getVisitsByGuest);

export default router;