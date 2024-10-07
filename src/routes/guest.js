//Third party imports
import { Router } from "express";

const router = Router();

//Get Code Alarm
router.get("/codeal", () => {
    console.log('Hola alarma');
});

export default router;