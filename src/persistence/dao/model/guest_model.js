import { Schema, model } from "mongoose";

export const guestCollection = "guest";

const GuestSchema = new Schema({
    first_name: {
        type: String,
        required: true,
    },
    last_name: {
        type: String,
        required: true,
    },
    nro_doc: {
        type: Number,
        required: true,
        unique: true,
    },
});

export const GuestModel = model(guestCollection, GuestSchema);
