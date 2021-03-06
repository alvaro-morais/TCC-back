import { Sequelize } from 'sequelize'
import db from '../db.js'

const servico = db.define(
  'tb_servico',
  {
    id_servico: {
      type: Sequelize.INTEGER.UNSIGNED,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    ds_nome_servico: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    ds_servico: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    ds_preco: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
  },
  { tableName: 'tb_servico' }
)

export default servico
