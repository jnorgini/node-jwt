import mongoose from "mongoose";

const ClientSchema = new mongoose.Schema({
    name: { type: String, required: true },
    status: { type: String, required: true },
    created_at: { type: Date, default: Date.now },
    updated_at: { type: Date, default: Date.now }
});

export const clients = mongoose.model('Client', ClientSchema);