import axios from 'axios'

    const api = axios.create({
        // baseURL: 'http://localhost:3030' 
        baseURL: 'https://pcp-jlopes.herokuapp.com/' 
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

            async controleEstoque ( idUsuario ,movimentacao ){
                let r = await api.put(`/controleestoque/${idUsuario}`, movimentacao )
                return r.data
            }


            async ListarUsuarios (nome, email) {
                let r = await api.get(`/usuarioscadastrados?nome=${nome}&email=${email}`)
                return r.data
            }

            async DeletarUsuarios ( idUsuario ) {
                let r = await api.delete(`/usuarioscadastrados/${idUsuario}`)
                return r.data
            }

            async ListarControleEstoque (nomeP, codigoP, NomeUser, DtMovimentacao, categoriaP, buscaAvancada ) {
                let r = await api.get(`/controleEstoque/?nomeP=${nomeP}&codigoP=${codigoP}&NomeUser=${NomeUser}&DtMovimentacao=${DtMovimentacao}&categoriaP=${categoriaP}&buscaAvancada=${buscaAvancada}`)
                return r.data
            }

            async ListarProdutosUsuario ( nomeP, codigoP, categoriaP, dtCadastro, buscaAvancada ) {
                let r = await api.get(`/produtosUsuarios/?nomeP=${nomeP}&codigoP=${codigoP}&categoriaP=${categoriaP}&dtCadastro=${dtCadastro}&buscaAvancada=${buscaAvancada}`)
                return r.data
            }

            async DeletarProdutosUsuario (idProduto) {
                let r = await api.delete(`/DeletarProdutoUsu/${idProduto}`)
                return r.data
            }

            async usersNaoCadastrados (nome, email) {
                let r = await api.get(`/usersNaoCadastrados?nome=${nome}&email=${email}`)
                return r.data
            }

            async gerenciarCadastro ( idUser, situacaoCadastro ){
                let r = await api.put(`aprovarCad/${idUser}?situacaoCadastro=${situacaoCadastro}`)
                return r.data
            }

            async loginAdm ( credenciais ){
                let r = await api.post('loginAdm', credenciais)
                return r.data
            }

        }