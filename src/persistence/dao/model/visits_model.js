import { Schema, model } from "mongoose";

export const visitCollection = "visit";

const VisitSchema = new Schema({
    nro_doc: { 
        type: Schema.Types.ObjectId, 
        ref: 'Guest', // referencia al modelo 'Guest'
        required: true 
    },
    codeAlarm: {
        type: String,
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
