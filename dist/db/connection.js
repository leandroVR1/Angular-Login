"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const sequelize = new sequelize_1.Sequelize(process.env.MYSQL_ADDON_DB || 'bzlg7r8oa8uodmoxm2hd', process.env.MYSQL_ADDON_USER || 'u5ytx71epslimyal', process.env.MYSQL_ADDON_PASSWORD || 'IC6VNKOEzSfeVFjRf8IH', {
    host: process.env.MYSQL_ADDON_HOST || 'bzlg7r8oa8uodmoxm2hd-mysql.services.clever-cloud.com',
    dialect: 'mysql',
    port: parseInt(process.env.MYSQL_ADDON_PORT || '3306'),
    logging: console.log,
    dialectOptions: {
        connectTimeout: 60000
    }
});
// Prueba la conexión
function testConnection() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield sequelize.authenticate();
            console.log('Conexión establecida correctamente con Clever Cloud.');
        }
        catch (err) {
            console.error('No se pudo conectar a la base de datos en Clever Cloud:', err);
            process.exit(1);
        }
    });
}
testConnection();
exports.default = sequelize;
