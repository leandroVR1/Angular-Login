import { Sequelize } from "sequelize";
import dotenv from 'dotenv';

dotenv.config();

const sequelize = new Sequelize(
  process.env.MYSQL_ADDON_DB || 'bzlg7r8oa8uodmoxm2hd',
  process.env.MYSQL_ADDON_USER || 'u5ytx71epslimyal',
  process.env.MYSQL_ADDON_PASSWORD || 'IC6VNKOEzSfeVFjRf8IH',
  {
    host: process.env.MYSQL_ADDON_HOST || 'bzlg7r8oa8uodmoxm2hd-mysql.services.clever-cloud.com',
    dialect: 'mysql',
    port: parseInt(process.env.MYSQL_ADDON_PORT || '3306'),
    logging: console.log,
    dialectOptions: {
      connectTimeout: 60000
    }
  }
);

// Prueba la conexión
async function testConnection() {
  try {
    await sequelize.authenticate();
    console.log('Conexión establecida correctamente con Clever Cloud.');
  } catch (err) {
    console.error('No se pudo conectar a la base de datos en Clever Cloud:', err);
    process.exit(1); 
  }
}

testConnection();

export default sequelize;