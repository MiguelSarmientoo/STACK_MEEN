const { Sequelize } = require('sequelize');

// Configuración de la conexión a la base de datos
const sequelize = new Sequelize('farmacia', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306, // Puerto MySQL predeterminado
});

// Verificar la conexión a la base de datos
sequelize.authenticate()
  .then(() => {
    console.log('Conexión establecida correctamente.');
  })
  .catch(err => {
    console.error('No se puede conectar a la base de datos:', err);
  });

module.exports = sequelize;
