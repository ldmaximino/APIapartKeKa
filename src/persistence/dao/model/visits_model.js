import { Schema, model } from "mongoose";

export const visitCollection = "visit";

const VisitSchema = new Schema({
    nro_doc: { 
        type: Number, 
        required: true, 
    },
    codeAlarm: {
        type: Number,
        required: true,
    },
    dateIN: {
        type: Date,
        required: true,
    },
    dateOut: {
        type: Date,
        required: true,
    },
});

export const VisitModel = model(visitCollection, VisitSchema);
