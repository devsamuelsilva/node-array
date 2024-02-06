import Fastify from 'fastify'
import { produtoService } from './services/produtos.service.js'

const fastify = Fastify({
  logger: true
})

const PORT = 5005

fastify.get('/produto', produtoService.buscarProduto )

fastify.get('/produto/:id', produtoService.buscarPorId )

fastify.post('/produto', produtoService.criarProduto )

fastify.patch('/produto/id/', produtoService.editarProdutoId)

fastify.delete('/produto/id/', produtoService.deletarProdutoId )

fastify.listen({ port:PORT}, (err, address) => {
  if(err) throw err;
  console.error(`IP: ${address}`);
})