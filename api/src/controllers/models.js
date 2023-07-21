const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  // defino el modelo
  const Citas = sequelize.define('citas', {
    id: { 
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true
    },
    nombre: { 
      type: DataTypes.STRING,
      allowNull: false,
    },
    fecha: { 
      type: DataTypes.STRING,
      allowNull: false,
    },
    hora: {  
      type: DataTypes.STRING,
      allowNull: true,
    },
    duracion: { 
      type: DataTypes.STRING,
      allowNull: true,
    },
    ubicacion: { 
      type: DataTypes.STRING,
      allowNull: true,
    },
    detalles: { 
      type: DataTypes.STRING, 
      allowNull: false,
    },
    estado: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true,
    }
  });

  return Citas;
};
