import {Router} from 'express';
import { createProduct, getProducts } from '../controllers/product';
import validateToken from './validate-token';
const router = Router();

//Ruta para obtener producto
router.get('/',validateToken, getProducts)


//Ruta para crear un nuevo producto
router.post('/',validateToken, createProduct)

export default router;