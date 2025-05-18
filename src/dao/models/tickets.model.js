import { Schema, model } from "mongoose";

const ticketSchema = new Schema({
    code:{
        type: String,
        unique: true,
        required: true,
    },
    purcharse_datatime: {
        type: Date,
        default: Date.now
    },
    amout: {
        type: Number,
        required: true
    },
    purcharser: {
        type: String,
        required: true
    },
    products: {
        type: Object
    }
});

const Ticket = model("ticker", ticketSchema);
export default Ticket;