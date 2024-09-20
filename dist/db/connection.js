"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const sequalieze = new sequelize_1.Sequelize('angular', 'root', 'admin123', {
    host: 'localhost',
    dialect: 'mysql'
});
exports.default = sequalieze;
