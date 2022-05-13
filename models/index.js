import agendamento from './agendamentoModel.js'
import cliente from './clienteModel.js'
import endereco from './enderecoClienteModel.js'
import funcionario from './funcionarioModel.js'
import lavaRapido from './lavaRapidoModel.js'
import servico from './servicoModel.js'

agendamento.belongsTo(cliente)
agendamento.belongsTo(lavaRapido)
agendamento.belongsTo(servico)
agendamento.belongsTo(endereco)

endereco.belongsTo(cliente)
endereco.hasMany(agendamento)

funcionario.belongsTo(lavaRapido)

servico.belongsTo(lavaRapido)

cliente.hasMany(endereco)
cliente.hasMany(agendamento)

lavaRapido.hasMany(funcionario)
lavaRapido.hasMany(servico)
lavaRapido.hasMany(agendamento)

servico.hasMany(agendamento)
