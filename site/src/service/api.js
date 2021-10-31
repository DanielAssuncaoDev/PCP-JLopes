import axios from 'axios'

    const api = axios.create({
        baseURL: 'http://localhost:3030'
    })


        export default class Api{

            async cadastarUsuario( credenciais ){
                let r = await api.post('/cadastrar', credenciais)
                return r.data
            }

            async gerenciarLogin ( idUsuario ){
                let r = await api.get(`/gerenciarLogin/${idUsuario}`)
                return r.data;
            }

            async loginUsuario ( credenciais ){
                let r = await api.post('/login', credenciais)
                return r.data
            }

            async cadastarProduto ( produto, idUsuario ){
                let r = await api.post(`/produto/${idUsuario}`, produto)
                return r.data
            }

            async listarCategorias (){
                let r = await api.get('/categorias')
                return r.data
            }

            async listarProdutos ( idUsuario, nomeP, codigoP, categoriaP, dtCadastro, buscaAvancada ){
                let r = await api.get(`/produto/${idUsuario}?nomeP=${nomeP}&codigoP=${codigoP}&categoriaP=${categoriaP}&dtCadastro=${dtCadastro}&buscaAvancada=${buscaAvancada}`)
                return r.data
            }

            async deletarProduto ( idProduto ){
                let r = await api.delete(`/produto/${idProduto}`)
                return r.data
            }

            async alterarProduto ( idProduto, produto ){
                let r = await api.put(`/produto/${idProduto}`, produto)
                return r.data
            }

            async controleEstoque ( movimentacao ){
                let r = await api.put(`/controleestoque`, movimentacao )
                return r.data
            }

        }