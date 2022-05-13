import express from 'express'
import clientes from './controllers/clientes.js'
import endereco from './controllers/enderecosCliente.js'
import agendamento from './controllers/agendamentos.js'
import funcionario from './controllers/funcionarios.js'
import lavaRapidos from './controllers/lavaRapidos.js'
import servicos from './controllers/servicos.js'
import autenticacao from './controllers/autenticacao.js'

const router = express.Router()

router.get('/', (req, res) => {
  return res.json('Backend Speedwash')
})

router.post('/agenda', agendamento.addAgendamento)
router.get('/agenda', agendamento.buscarAgendamento)
router.put('/agenda/:id_agendamento', agendamento.attAgendamento)
router.delete('/agenda/:id_agendamento', agendamento.deletarAgendamento)
router.get('/agenda/:id_agendamento', agendamento.buscarUmAgendamento)
router.get('/agendaCliente/:tbClienteIdCliente', agendamento.buscarAgendamentoCliente)

router.post('/clientes', clientes.addCliente)
router.get('/clientes', clientes.buscaTodosClientes)
router.put('/clientes/:id_cliente', clientes.attCliente)
router.delete('/clientes/:id_cliente', clientes.deletarCliente)
router.get('/clientes/:id_cliente', clientes.buscaUmCliente)

router.post('/clientesEndereco', endereco.addEnderecoCliente)
router.get('/clientesEndereco', endereco.buscaTodosEnderecosCliente)
router.put('/clientesEndereco/:id_endereco_cliente', endereco.attEnderecoCliente)
router.delete('/clientesEndereco/:id_endereco_cliente', endereco.deletarEnderecoCliente)
router.get('/clientesEndereco/:tbClienteIdCliente', endereco.buscarEnderecoCliente)

router.post('/funcionario', funcionario.addFuncionario)
router.get('/funcionario', funcionario.buscaTodosFuncionarios)
router.put('/funcionario/:id_funcionario', funcionario.attFuncionario)
router.delete('/funcionario/:id_funcionario', funcionario.deletarFuncionario)

router.post('/lavaRapido', lavaRapidos.addLavaRapido)
router.get('/lavaRapido', lavaRapidos.buscaTodosLavaRapidos)
router.put('/lavaRapido/:id_lava_rapido', lavaRapidos.attLavaRapido)
router.delete('/lavaRapido/:id_lava_rapido', lavaRapidos.deletarLavaRapido)

router.post('/servicos', servicos.addServico)
router.get('/servicos', servicos.buscaTodosServicos)
router.put('/servicos/:id_servico', servicos.attServico)
router.delete('/servicos/:id_servico', servicos.deletarServico)
router.get('/servicosLavaRapido/:tbLavaRapidoIdLavaRapido', servicos.buscarServicoLavaRapido)
router.get('/servicosPreco/:id_servico', servicos.buscarPrecoServicoLavaRapido)

router.post('/login', autenticacao.login)

export default router
