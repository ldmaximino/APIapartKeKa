import { VisitModel } from "./model/visits_model.js";

export default class VisitGuestDao {
    constructor() {}
  
    getByNroDoc = async(number) => {
      try {
        const response = await VisitModel.findOne({nro_doc: Number(number)});
        return response;
      } catch (error) {
        throw new Error(error);
      }
    }
  
    async create(obj) {
      try {
        return await VisitModel.create(obj);
      } catch (error) {
        throw new Error(error);
      }
    }
  
    async getVisitsByGuest(number) {
      try {
        return await VisitModel.find({ nro_doc: Number(number) });
      } catch (error) {
        throw new Error(error);
      }
    }

    async checkDateOverlap(start, end) {
      // Buscar visitas que se solapen con las fechas proporcionadas
      // Devolver verdadero si hay solapamientos, falso en caso contrario
      const visits = await VisitModel.find({ });
      for(const visit of visits) {
        if(start >= visit.dateIN && start <= visit.dateOut) return true;
        if(end >= visit.dateIN && end <= visit.dateOut) return true;
      }
      return false
    }

    /* 
    async update(id, obj) {
      try {
        return await GuestModel.findByIdAndUpdate(id, obj, { new: true });
      } catch (error) {
        throw new Error(error);
      }
    }

    async update(id, obj) {
      try {
        return await this.model.findByIdAndUpdate(id, obj, { new: true });
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