import {Request, Response} from 'express';
import { Product } from '../models/product';


export const getProducts = async (req: Request, res: Response) => {
    try {
        const listProducts = await Product.findAll();
        res.json(listProducts);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener productos', error });
    }
};

export const createProduct = async (req: Request, res: Response) => {
    const { name, description } = req.body;

    try {
        const newProduct = await Product.create({ name, description });
        res.json({
            msg: 'Producto creado exitosamente!',
            product: newProduct
        });
    } catch (error) {
        res.status(400).json({
            msg: 'Ha ocurrido un error:',
            error
        });
    }

}


    /*res.json({
        msg: 'Get Products',
    })*/

       