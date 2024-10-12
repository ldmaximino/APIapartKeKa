import VisitGuestDao from "../persistence/dao/visit-guest_dao.js";
const visitGuestDao = new VisitGuestDao();

export default class VisitGuestService {

  async getCodeAlarm(number) {
    try {
      const response = await visitGuestDao.getVisitsByGuest(number);
      const dateNow = new Date();
      for(const visit of response) {
        if(visit.dateIN <= dateNow && visit.dateOut >= dateNow) {
          return visit;
        }
      }
      return null; //si la fecha y hora actual no está dentro del rango de ninguna visita, devuelve null
    } catch (error) {
      throw new Error(error);
    }
  }

  async create(obj) {
    try {
      return await visitGuestDao.create(obj);
    } catch (error) {
      throw new Error(error);
    }
  }

  async getVisitsByGuest(number) {
    try {
      return await visitGuestDao.getVisitsByGuest(number);
    } catch (error) {
      throw new Error(error);
    }
  }

  async checkDateOverlap(start, end) {
    try {
      return await visitGuestDao.checkDateOverlap(start, end);
    } catch (error) {
      throw new Error(error);
    }
  }
}
