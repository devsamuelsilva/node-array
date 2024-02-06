import { produtos } from "../db/produtos.js"

export const produtoService = {

    buscarProduto: (request, ress) => {
       return produtos

    },

    buscarPorId: (request, reply) => {
        let idReq = request.params.id
        return produtos.find(p => p.id === parseInt(idReq))
    },

    criarProduto: (request, reply) => {
        let produtoReq = request.body
        return produtos.push(produtoReq)
    },

    editarProdutoId: (request, reply) => {
        reply.send (`Editando o Produto`)
    },
    
    deletarProdutoId: (request, reply) => {
        reply.send (`Deletando o Produto`)
      },

}