"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const sequelize = new sequelize_1.Sequelize('angular', 'root', 'admin123', {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306,
    logging: console.log,
    dialectOptions: {
        connectTimeout: 60000
    }
});
// Prueba la conexión
sequelize.authenticate()
    .then(() => {
    console.log('Conexión establecida correctamente.');
})
    .catch(err => {
    console.error('No se pudo conectar a la base de datos:', err);
});
exports.default = sequelize;
