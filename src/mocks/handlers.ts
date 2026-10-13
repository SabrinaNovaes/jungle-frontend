
import { http, HttpResponse } from 'msw'

const produtos = [
    { id: 1, nome: 'Emerald Ape', identificador:'#042', preco: '1.19 ETH', imagem: 'imagem1', imagens: ['imagem1', 'imagem2', 'imagem3', 'imagem4'] },
    { id: 2, nome: 'Sage Nomad', identificador:'#009', preco: '1.69 ETH', imagem: 'imagem2', imagens: ['imagem2', 'imagem1', 'imagem3', 'imagem4'] },
    { id: 3, nome: 'Neon Vessel', identificador:'#552', preco: '1.99 ETH', imagem: 'imagem3', imagens: ['imagem3', 'imagem2', 'imagem1', 'imagem4'] },
    { id: 4, nome: 'Cosmic Bloom', identificador:'#118', preco: '1.29 ETH', imagem: 'imagem2', imagens: ['imagem2', 'imagem1', 'imagem3', 'imagem4'] },
    { id: 5, nome: 'Violet Nomad', identificador:'#314', preco: '1.39 ETH', imagem: 'imagem2', imagens: ['imagem2', 'imagem3', 'imagem1', 'imagem4'] },
    { id: 6, nome: 'Ivory aron', identificador:'#088', preco: '1.79 ETH', imagem: 'imagem3', imagens: ['imagem3', 'imagem1', 'imagem2', 'imagem4'] },
    { id: 7, nome: 'Golden Beat', identificador:'#207', preco: '0.99 ETH', imagem: 'imagem4', imagens: ['imagem4', 'imagem1', 'imagem2', 'imagem3'] },
    { id: 8, nome: '', identificador:'', preco: '', imagem: 'imagem4', imagens: ['imagem4'] },
    { id: 9, nome: 'Golden Signal', identificador:'#160', preco: '0.39 ETH', imagem: 'imagem4', imagens: ['imagem4', 'imagem2', 'imagem3', 'imagem1'] },
]

export const handlers = [
    http.get('/api/teste', () => {
        return HttpResponse.json({
            status: 'ok',
            message: 'Jungle Gaming API funcionando!',
        })
    }),

    // Listar produtos para os cards
    http.get('/api/produtos', () => {
        return HttpResponse.json(produtos)
    }),

    // Buscar um produto pelo ID
    http.get('/api/produtos/:id', ({ params }) => {
        const id = Number(params.id)
        const produto = produtos.find((item) => item.id === id)

        if (!produto) {
            return HttpResponse.json(
                { mensagem: 'Produto não encontrado' },
                { status: 404 }
            )
        }

        return HttpResponse.json(produto)
    }),
]
