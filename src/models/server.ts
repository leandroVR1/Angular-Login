import express, { Application } from 'express';
import cors from 'cors';
import routesProduct from '../routes/product';
import routesUser from '../routes/user';
import { Product } from './product';
import { User } from './user';
import dotenv from 'dotenv';

dotenv.config(); // Asegúrate de cargar las variables de entorno

class Server {
    private app: Application;
    private port: string;

    constructor() {
        this.app = express();
        this.port = process.env.PORT || '3001';
        this.midlewares();
        this.routes();
        this.dbConnect();
        this.listen();
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log('Aplicación corriendo en el puerto ' + this.port);
        });
    }

    routes() {
        this.app.use('/api/products', routesProduct);
        this.app.use('/api/users', routesUser);
    }

    midlewares() {
        this.app.use(express.json());
        this.app.use(cors());
    }

    async dbConnect() {
        try {
            await Product.sync();
            await User.sync();
            console.log('Base de datos sincronizada correctamente');
        } catch (error) {
            console.error('Error al sincronizar la base de datos:', error);
            process.exit(1); // Termina el proceso si no se puede sincronizar la base de datos
        }
    }
}

export default Server;