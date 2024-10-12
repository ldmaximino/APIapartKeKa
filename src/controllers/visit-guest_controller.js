import VisitGuestService from "../services/visit-guest_service.js";
import GuestService from "../services/guest_service.js";
const visitGuestService = new VisitGuestService();
const guestService = new GuestService();

export default class VisitGuestController {
  constructor() {}

  async getCodeAlarm(req, res, next) {
    try {
      const { number } = req.query;
      const response = await visitGuestService.getCodeAlarm(number);
      if (!response)
        return res.json({ msg: "Guest does not have a current accommodation" });
      return res.json({ visit: response });
    } catch (error) {
      next(error);
    }
  }

  async createVisit(req, res, next) {
    try {
      const objVisit = req.body;
      //verifica que las fechas sean válidas
      const start = new Date(objVisit.dateIN);
      const end = new Date(objVisit.dateOut);
      if (isNaN(start.getTime()) || isNaN(end.getTime())) {
        return res.json({ msg: "Invalid dates" });
      }
      const timeMin = 36000000; //milliseconds 36.000.000 = 10 horas * 60 * 60 * 1000
      const timeStay = end - start;
      if(timeStay < timeMin ) return res.json({ msg: "The departure date must be 10 hours later than the entry date" });

      //verifica que el invitado exista en la colección guests
      const existGuest = await guestService.getByNroDoc(objVisit.nro_doc);
      if (!existGuest) return res.json({ msg: "Guest does not exist" });

      //Debería verificar que ese día y hora no esté ocupado
      const checkOverLap = await visitGuestService.checkDateOverlap(start, end);
      if(checkOverLap) return res.json({ msg: "Period is not available" });

      const newVisit = await visitGuestService.create(objVisit);
      return res.json(newVisit);
    } catch (error) {
      next(error);
    }
  }

  async getVisitsByGuest(req, res, next) {
    try {
      const number = req.params.id;

      //verifica que el invitado exista en la colección guests
      const guest = await guestService.getByNroDoc(number);
      if (!guest) return res.json({ msg: "Guest does not exist" });

      const visits = await visitGuestService.getVisitsByGuest(number);
      return res.json({ guest, visits });
    } catch (error) {
      next(error);
    }
  }

}
