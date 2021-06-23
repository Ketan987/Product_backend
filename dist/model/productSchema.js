"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importDefault(require("mongoose"));
var productSchema = new mongoose_1.default.Schema({
    id: {
        type: String,
        unique: true,
        required: true
    },
    productName: {
        type: String,
    },
    productCode: {
        type: String,
    },
    description: {
        type: String
    },
    releaseDate: {
        type: Date,
    },
    price: {
        type: Number
    },
    rating: {
        type: Number
    },
    imageUrl: {
        type: String
    }
}, { collection: "ProductData", timestamps: true });
exports.default = mongoose_1.default.model("ProductData", productSchema);
