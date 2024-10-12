import { GuestModel } from "./model/guest_model.js";

export default class GuestDao {
    constructor() {}
  
    getByNroDoc = async(number) => {
      try {
        const response = await GuestModel.findOne({nro_doc: Number(number)});
        return response;
      } catch (error) {
        throw new Error(error);
      }
    }
  
    async create(obj) {
      try {
        return await GuestModel.create(obj);
      } catch (error) {
        throw new Error(error);
      }
    }
  
    async update(id, obj) {
      try {
        return await GuestModel.findByIdAndUpdate(id, obj, { new: true });
      } catch (error) {
        throw new Error(error);
      }
    }

    /*
    async getAll() {
        try {
          return await this.model.find({});
        } catch (error) {
          throw new Error(error);
        }
    }
     
    async delete(id) {
      try {
        return await this.model.findByIdAndDelete(id);
      } catch (error) {
        throw new Error(error);
      }
    }
    */
  }