"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const product_1 = require("../controllers/product");
const validate_token_1 = __importDefault(require("./validate-token"));
const router = (0, express_1.Router)();
//Ruta para obtener producto
router.get('/', validate_token_1.default, product_1.getProducts);
router.get('/:id', validate_token_1.default, product_1.getProductById);
//Ruta para crear un nuevo producto
router.post('/', validate_token_1.default, product_1.createProduct);
//Ruta para editar un Producto
router.put('/:id', validate_token_1.default, product_1.updateProduct);
//Ruta para eliminar un Producto
router.delete('/:id', validate_token_1.default, product_1.deleteProduct);
exports.default = router;
