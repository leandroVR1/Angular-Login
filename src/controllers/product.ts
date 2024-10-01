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

export const getProductById = async (req: Request, res: Response) => {
    const { id } = req.params;

    try {
        const product = await Product.findByPk(id);
        if (!product) {
            return res.status(404).json({ message: 'Producto no encontrado' });
        }
        res.json(product);
        
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener el producto', error });
    }

}

     


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

export const updateProduct = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { name, description } = req.body;

    try {
        const updatedProduct = await Product.update({ name, description }, { where: { id } });
        if (updatedProduct[0] === 0) {
            return res.status(404).json({ message: 'Producto no encontrado' });
        }
        res.json({
            msg: 'Producto actualizado exitosamente!',
            product: updatedProduct[0]
        });
    } catch (error) {
        res.status(400).json({
            msg: 'Ha ocurrido un error:',
            error
        });
    }
}

export const deleteProduct = async (req: Request, res: Response) => {
    const { id } = req.params;

    try {
        const deletedProduct = await Product.destroy({ where: { id } });
        if (deletedProduct === 0) {
            return res.status(404).json({ message: 'Producto no encontrado' });
        }
        res.json({
            msg: 'Producto eliminado exitosamente!',
            deletedProduct
        });
    } catch (error) {
        res.status(500).json({
            msg: 'Ha ocurrido un error:',
            error
        });
    }
}



       