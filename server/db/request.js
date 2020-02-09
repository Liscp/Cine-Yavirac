const Sequelize = require('sequelize');
const sequelize = new Sequelize('baseJose', 'postgres', 'marcelo272', 
  {
    host: 'localhost',
    dialect: 'postgres',
    
    
  });
sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });
  
  const formatoUsuario = sequelize.define("peli",{
    titulo: Sequelize.TEXT,
    resumen: Sequelize.TEXT,
    categoria: Sequelize.TEXT,
    valorboleto: Sequelize.TEXT,
  },
  {
    timestamps: false
})
exports.formatoUsuario = formatoUsuario;