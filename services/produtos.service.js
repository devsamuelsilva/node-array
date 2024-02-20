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
    editarProdutoIdParcial:(req, res) => {
        const id = req.params.id

        let produto = produtos.find(p => p.id === parseInt(id))

        // !produto -> se produto na existir
        if(!produto){// com apenas o paramentro o JavaScript ja verifica se e undeined, null, 0
            res.status(404).send({message: 'Produto não encontrado.'})
            //return interrompe, caso não haja produto e para o programa.
            return
        }

        produto.nome = req.body.nome ?? produto.nome
        produto.preco = req.body.preco ?? produto.preco
        produto.off = req.body.off ?? produto.off

        //Atualiza cada propriedade do produto do arary com o produto do bady.
        res.status(201).send(produto)
    },

    editarProdutoId: (request, reply) => {
        reply.send (`Editando o Produto`)
        console.log('Faz o PUT em casa e tras na px aula.');
    },
    
    deletarProdutoId: (request, reply) => {
        const id = request.params.id;

        // Encontra o índice do produto no array
        let indiceProduto = produtos.findIndex(p => p.id === parseInt(id));
      
        // Verifica se o produto existe
        if (indiceProduto === -1) {
          return reply.status(404).send({ message: "Produto não encontrado." });
        }
      
        // Remove o produto do array usando splice
        produtos.splice(indiceProduto, 1);
      
        // Envia uma mensagem de sucesso
        return reply.status(200).send({ message: "Produto deletado com sucesso." });
      },

      deletarTodos: (request, reply) => {
          // Apaga todos os produtos do array
        produtos.splice(0, produtos.length);

        // Envia uma mensagem de sucesso
        return reply.status(200).send({ message: "Todos os produtos foram deletados com sucesso." });
      }

}