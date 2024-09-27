"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createProduct = exports.getProducts = void 0;
const product_1 = require("../models/product");
const getProducts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const listProducts = yield product_1.Product.findAll();
        res.json(listProducts);
    }
    catch (error) {
        res.status(500).json({ message: 'Error al obtener productos', error });
    }
});
exports.getProducts = getProducts;
const createProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, description } = req.body;
    try {
        const newProduct = yield product_1.Product.create({ name, description });
        res.json({
            msg: 'Producto creado exitosamente!',
            product: newProduct
        });
    }
    catch (error) {
        res.status(400).json({
            msg: 'Ha ocurrido un error:',
            error
        });
    }
});
exports.createProduct = createProduct;
/*res.json({
    msg: 'Get Products',
})*/
