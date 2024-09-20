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


    /*res.json({
        msg: 'Get Products',
    })*/

       