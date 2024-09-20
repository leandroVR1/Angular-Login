import { Sequelize } from "sequelize";

const sequalieze = new Sequelize('angular', 'root', 'admin123', {
    host: 'localhost',
    dialect: 'mysql'
});

export default sequalieze

