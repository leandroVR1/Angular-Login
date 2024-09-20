import {Request, Response} from 'express';
import bcrypt from 'bcrypt';
import { User } from '../models/user';
import jwt from 'jsonwebtoken'
export const newUser = async (req: Request, res: Response) => {
    const { username, password } = req.body;

    // Validar que username y password estén definidos
    if (!username || !password) {
        return res.status(400).json({
            msg: 'El nombre de usuario y la contraseña son obligatorios.'
        });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    // Validar si el usuario existe en la base de datos
    const user = await User.findOne({ where: { username } });
    if (user) {
        return res.status(400).json({
            msg: `Ya existe un usuario con el nombre ${username}`
        });
    }

    try {
        // Guardar el usuario en la base de datos
        await User.create({
            username,
            password: hashedPassword
        });
        res.json({
            msg: `Usuario ${username} creado exitosamente!`,
        });
    } catch (error) {
        res.status(400).json({
            msg: 'Ha ocurrido un error:',
            error
        });
    }
};


export const loginUser = async (req: Request, res: Response) => {
    const { username, password } = req.body;

    // Validar que username y password estén definidos
    if (!username || !password) {
        return res.status(400).json({
            msg: 'El nombre de usuario y la contraseña son obligatorios.'
        });
    }

    // Validar si el usuario existe
    const user: any = await User.findOne({ where: { username: username } });

    if (!user) {
        return res.status(400).json({
            msg: `No existe un usuario con el nombre ${username}`
        });
    }

    // Validar password
    const passwordValid = await bcrypt.compare(password, user.password);
    if (!passwordValid) {
        return res.status(400).json({
            msg: 'Contraseña incorrecta'
        });
    }

    // Generar token
    const token = jwt.sign({
        username: username 
    }, process.env.SECRET_KEY || 'secret123',{
        //expiresIn: '2000'
    });


    res.json( token );
   
};


