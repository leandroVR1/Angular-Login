import {Router} from 'express';
import { createProduct, deleteProduct, getProductById, getProducts, updateProduct } from '../controllers/product';
import validateToken from './validate-token';
const router = Router();

//Ruta para obtener producto
router.get('/',validateToken, getProducts)
router.get('/:id',validateToken, getProductById)
//Ruta para crear un nuevo producto
router.post('/',validateToken, createProduct)

//Ruta para editar un Producto
router.put('/:id',validateToken, updateProduct)

//Ruta para eliminar un Producto
router.delete('/:id',validateToken, deleteProduct)


export default router;