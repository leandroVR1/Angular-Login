import { Sequelize } from "sequelize";

const sequelize = new Sequelize('angular', 'root', 'admin123', {
  host: 'localhost',
  dialect: 'mysql',
  port: 3306,
  logging: console.log, // Esto mostrará las consultas SQL en la consola
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

export default sequelize;