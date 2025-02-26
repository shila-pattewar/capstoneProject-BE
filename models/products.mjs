import mongoose from "mongoose";
// import Photo from "./photo.mjs";

const productsSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    image: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Photo',
    },
    price: {
        type: Number,
        required: true
    },
    ingredients: {
        type: [String],
        required: true
    },

});

const products = mongoose.model('products', productsSchema);

export default products;