import GuestDao from "../persistence/dao/guest_dao.js";
const guestDao = new GuestDao();

export default class GuestService {

  async create(obj) {
    try {
      const guest = await guestDao.getByNroDoc(obj.nro_doc);
      if(guest) return null;
      return await guestDao.create(obj);
    } catch (error) {
      throw new Error(error);
    }
  }

  async update(doc,obj) {
    try {
      const guest = await guestDao.getByNroDoc(doc);
      if(!guest) return null;
      return await guestDao.update(guest._id, obj);
    } catch (error) {
      throw new Error(error);
    }
  }

  async getByNroDoc(doc) {
    try {
      const guest = await guestDao.getByNroDoc(doc);
      if(!guest) return null;
      return await guestDao.update(guest);
    } catch (error) {
      throw new Error(error);
    }
  }
}
