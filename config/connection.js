const Sequelize = require('sequelize');
require('dotenv').config();

let sequelize;


  sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    process.env.DB_HOST,
    process.env.DB_PORT,
    {
      host: DB_HOST,
      dialect: 'mysql',
      port: DB_PORT
    }
  );


module.exports = sequelize;
