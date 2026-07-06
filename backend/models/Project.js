import mongoose from "mongoose";

const projectSchema = new mongoose.Schema({
    category: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true  
    },
    content: {
        type: String,
        required: true
    },
    tags: {
        type: String,
        required: true
    }
})