import mongoose from "mongoose";

const productsSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    image: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Photo',
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    ingredients: {
        type: [String],
    },

});

const products = mongoose.model('products', productsSchema);

export default products;