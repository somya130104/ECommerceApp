import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    category: { type: String, required: true },
    image: { type: Array, required: true },
    subCategory: { type: String, required: true },
    sizes: { type: Array, required: true },
    bestSeller: { type: Boolean},
    date : { type: Number, requiredq: true }
});

const productModel = mongoose.models.product || mongoose.model("product", productSchema);
export default productModel;