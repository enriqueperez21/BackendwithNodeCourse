import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    precio:{
        type: Number,
        required: true
    },
    costo:{
        type: Number,
        required: true
    }
},{collection: "Productos"})

export default mongoose.model('products', productSchema)