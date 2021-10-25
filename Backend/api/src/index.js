import db from './db.js';
import express from 'express';
import cors from 'cors';
import crypto from 'crypto-js' 
import require from 'sequelize'
// import pcpjp2021_tb_produto from './models/pcpjp2021_tb_produto.js';
// import pcpjp2021_tb_controle_estoque from './models/pcpjp2021_tb_controle_estoque.js';
// import pcpjp2021_tb_usuario from './models/pcpjp2021_tb_usuario.js';

const app = new express()
app.use(cors())
app.use(express.json())




    app.post('/cadastrar', async (req, resp) => {

        try {
            let cd = req.body;
            let tbProduto = await db.pcpjp2021_tb_usuario.findAll()


            if(cd.nome == '' || cd.email == '' || cd.senha == '' ){
                resp.send({erro: 'Todos os campos devem estar preenchidos'})
            }

            if(tbProduto.some( x => x.dataValues.ds_email == cd.email) ){
                resp.send({erro: 'Email já foi cadastrado!'})
                return
            }

            // if(cd.email.substring((cd.email.indexOf('@')) ) != '@acaonsfatima.org.br' ) {
            //     resp.send({erro: 'Deve ser cadastrado um E-mail da instituição'})
            //     return
            // }


            // if(isNaN(cd.chamada)){
            //     resp.send({erro: 'A chamada deve ser um número'})
            //     return
            // }

            // if((cd.chamada) <= 0 ){
            //     resp.send({erro: 'A chamada deve ser maior que zero'})
            // }

            // if(tbProduto.some( x => x.dataValues.ds_turma == cd.turma && x.dataValues.nr_chamada == cd.chamada )){
            //     resp.send({erro: "O número de chamada " + cd.chamada + " ja foi cadastrado na turma " + cd.turma })
            //     return
            // }


                let inserirCadastro = {
                    nm_usuario: cd.nome,
                    ds_email: cd.email,
                    // ds_turma: cd.turma,
                    // nr_chamada: cd.chamada,
                    ds_senha: crypto.SHA256(cd.senha).toString(crypto.enc.Base64),
                    bt_ativo: false
                }

            let r = await db.pcpjp2021_tb_usuario.create(inserirCadastro)
                delete(r.dataValues.ds_senha)

            resp.send(r)

        } catch (e) {
           resp.send({erro: e.toString() }) 
        }      

    })

    app.get('/gerenciarLogin/:idUsuario', async (req, resp) => {

        try {
            let r = await db.pcpjp2021_tb_usuario.findOne({
                where: {
                    id_usuario: req.params.idUsuario
                }
            })

            delete(r.dataValues.ds_senha)
            resp.send(r)
            
        } catch (e) {
            resp.send({erro: e.toString()})            
        }

    })

    app.post('/login', async (req, resp) => {

        try {
            let user = req.body;

            if( user.email == '' || user.senha == '' ){
                resp.send({erro: 'Todos os campos devem estar preenchidos'})
                return
            }

            let login = await db.pcpjp2021_tb_usuario.findOne({
                where: {
                    ds_email: user.email,
                    ds_senha: crypto.SHA256(user.senha).toString(crypto.enc.Base64)
                }
            })


                if( login == null ){
                    resp.send({erro: 'Cadastro não foi encontrado'})
                    return
                }

            delete(login.dataValues.ds_senha)
            resp.send(login)

        } catch (e) {
            resp.send({erro: e.toString()})
        }

    })

    app.post('/produto/:idUsuario', async (req, resp) => {

        try {
            let p = req.body;
            let usu = req.params.idUsuario;

            let produtos = await db.pcpjp2021_tb_produto.findAll()


            if( produtos.some( x => x.dataValues.nr_codigo == p.codigoP) ){
                resp.send({erro: 'O código de produto inserido já foi cadastrado'})
                return
            }


            if(String(p.codigoP).substring(0, 3) != '690'){
                resp.send({erro: "Os três primeiros digitos do Código do Produto devem ser iguais a '690'"})
                return
            }


            if(String(p.codigoP).length != 9 ){
                resp.send({erro: 'O Código do Produto dever ter nove digitos'})
                return
            }

            if(p.qtdAtual < 0 || p.qtdMinima < 0 || p.valorC < 0 || p.valorV < 0){
                resp.send({erro: 'Você não pode insirir números negativos'})
                return
            }

            if(p.qtdAtual % 1 != 0 || p.qtdMinima % 1 != 0){
                resp.send({erro: "Você só pode inserir números inteiros nos campos: 'Quantidade Atual' e 'Quantidade Mínima'"})
                return
            }

            if (p.valorV < p.valorC){
                resp.send({erro: 'O Valor de Custo não pode ser maior que o Valor de Venda'})
                return
            }


            if(isNaN(p.qtdAtual) || isNaN(p.qtdMinima) || isNaN(p.codigoP) ||isNaN(p.valorC) || isNaN(p.valorV)){
                
                if (isNaN(p.qtdAtual)) {
                    resp.send({erro: "Você pode insirir apenas números no campo 'Quantidade Atual' "})

                } else if(isNaN(p.qtdMinima)){
                    resp.send({erro: "Você pode insirir apenas números no campo 'Quantidade Mínima' "})

                } else if(isNaN(p.codigoP)){
                    resp.send({erro: "Você pode insirir apenas números no campo 'Código de Produto' "})

                } else if(isNaN(p.valorC)){
                    resp.send({erro: "Você pode insirir apenas números no campo 'Valor de Custo' "})

                } else if(isNaN(p.valorV)){
                    resp.send({erro: "Você pode insirir apenas números no campo 'Valor de Venda' "})

                } 

                return

            }


            if(p.nome == '' || p.categoria == '' || String(p.codigoP) == '' || String(p.qtdAtual) == '' || String(p.qtdMinima) == '' || String(p.valorC) == '' || String(p.valorV) == '' ){
                resp.send({erro: "Todos os campos devem estar preenchidos"})
                return
            }


                let inserirProduto = {
                    id_usuario: usu,
                    nm_produto: p.nome,
                    ds_categoria: p.categoria,
                    nr_codigo: p.codigoP,
                    qtd_atual: p.qtdAtual,
                    qtd_minima: p.qtdMinima,
                    vl_custo: p.valorC,
                    vl_venda: p.valorV,
                    dt_cadastro: new Date()
                }

            let r = await db.pcpjp2021_tb_produto.create(inserirProduto)
            resp.sendStatus(200)

        } catch (e) {
            resp.send({erro: e.toString()})
        }


    })

    app.get('/categorias', async (req, resp) => {
        
        try {
            
            let produtos = await db.pcpjp2021_tb_produto.findAll()

            let categorias = []

            for ( const r of produtos ){
                let c = r.ds_categoria[0].toUpperCase() + r.ds_categoria.substring(1)

                    if( categorias.some((C) => C === c ) ) {
                        continue
                    }

                categorias.push(c)
            }

            resp.send(categorias)

        } catch (e) {
            resp.send({erro: e.toString()})
        }

    })

    app.get('/produto/:idUsuario', async (req, resp) => {

        try {
        

            const { Op } = require;

                let where = [
                    {
                        id_usuario: req.params.idUsuario
                    }
                ]

                let filtros = [
                    {
                        nm_produto: {[Op.substring]:req.query.nomeP},
                        value: req.query.nomeP
                    },
                    {
                        nr_codigo:  {[Op.substring]: req.query.codigoP},
                        value: req.query.codigoP
                    },
                    {
                        ds_categoria: {[Op.substring]: req.query.categoriaP},
                        value: req.query.categoriaP
                    },
                    {
                        dt_cadastro: {[Op.substring]: req.query.dtCadastro},
                        value: req.query.dtCadastro
                    }   
                ]
            

                filtros = filtros.filter( (c) => c.value != '' )

                for( let c of filtros ){
                    delete(c.value)
                }

                if (filtros.length != 0 ){
                    filtros = {
                        [Op.or]: filtros
                    }
    
                    where.push(filtros)
                }
  
                let r = await db.pcpjp2021_tb_produto.findAll({
                    where: where
                })

            resp.send(r)

        } catch (e) {
            resp.send({erro: e.toString()})
        }

    })

    app.delete('/produto/:idProduto', async (req, resp) => {

        try {
            
            let p = await db.pcpjp2021_tb_produto.destroy({
                where: {
                    id_produto: req.params.idProduto
                }
            })

            resp.sendStatus(200)

        } catch (e) {
            resp.send({erro: e.toString()})
        }

    })

    app.put('/produto/:idProduto', async (req, resp) => {

        try {
            let p = req.body

            let produtos = await db.pcpjp2021_tb_produto.findAll()


            if( produtos.some( x => x.dataValues.nr_codigo == p.codigoP && x.dataValues.id_produto != req.params.idProduto ) ){
                // console.log(x.dataValues.id_produto + req.params.idProduto)
                resp.send({erro: 'O código de produto inserido já foi cadastrado'})
                return
            }


            if(String(p.codigoP).substring(0, 3) != '690'){
                resp.send({erro: "Os três primeiros digitos do Código do Produto devem ser iguais a '690'"})
                return
            }


            if(String(p.codigoP).length != 9 ){
                resp.send({erro: 'O Código do Produto dever ter nove digitos'})
                return
            }

            if(p.qtdAtual < 0 || p.qtdMinima < 0 || p.valorC < 0 || p.valorV < 0){
                resp.send({erro: 'Você não pode insirir números negativos'})
                return
            }

            if(p.qtdAtual % 1 != 0 || p.qtdMinima % 1 != 0){
                resp.send({erro: "Você só pode inserir números inteiros nos campos: 'Quantidade Atual' e 'Quantidade Mínima'"})
                return
            }

            if(isNaN(p.qtdAtual) || isNaN(p.qtdMinima) || isNaN(p.codigoP) ||isNaN(p.valorC) || isNaN(p.valorV)){
                
                if (isNaN(p.qtdAtual)) {
                    resp.send({erro: "Você pode insirir apenas números no campo 'Quantidade Atual' "})

                } else if(isNaN(p.qtdMinima)){
                    resp.send({erro: "Você pode insirir apenas números no campo 'Quantidade Mínima' "})

                } else if(isNaN(p.codigoP)){
                    resp.send({erro: "Você pode insirir apenas números no campo 'Código de Produto' "})

                } else if(isNaN(p.valorC)){
                    resp.send({erro: "Você pode insirir apenas números no campo 'Valor de Custo' "})

                } else if(isNaN(p.valorV)){
                    resp.send({erro: "Você pode insirir apenas números no campo 'Valor de Venda' "})

                } 

                return

            }


            if(p.nome == '' || p.categoria == '' || String(p.codigoP) == '' || String(p.qtdAtual) == '' || String(p.qtdMinima) == '' || String(p.valorC) == '' || String(p.valorV) == '' ){
                resp.send({erro: "Todos os campos devem estar preenchidos"})
                return
            }


            
                let r = await db.pcpjp2021_tb_produto.update({
                        nm_produto: p.nome,
                        ds_categoria: p.categoria,
                        nr_codigo: p.codigoP,
                        qtd_atual: p.qtdAtual,
                        qtd_minima: p.qtdMinima,
                        vl_custo: p.valorC,
                        vl_venda: p.valorV,       
                    }, {
                        where: {
                            id_produto: req.params.idProduto
                        }
                    }
                )

            resp.sendStatus(200)
            

        } catch (e) {
            resp.send({erro: e.toString()})
        }

    })

    app.put('/controleestoque', async (req, resp) =>  {

        try {

            let {codigoP, qtdM, mov} = req.body
            qtdM = Number(qtdM)

                    let p = await db.pcpjp2021_tb_produto.findOne({
                        where: {
                            nr_codigo: codigoP
                        }
                    })

                if (p == null){
                    resp.send({erro: 'O código inserido não está cadastrado'})
                    return
                }

               if (String(qtdM) == '' ){
                   resp.send({erro: 'Nenhum campo pode estar vazio'})
                   return
               }

               if (isNaN(qtdM) || qtdM % 1 != 0 ){
                    resp.send({erro: 'Você só pode inserir números inteiros no campo Quantidade'})
               }
                
               if (qtdM < 0){
                    resp.send({erro: 'Você não pode inserir números negativos'})
               }


            if( mov == 'Entrada' ){

                    let r = await db.pcpjp2021_tb_produto.update({
                            qtd_atual: p.qtd_atual + qtdM
                        }, {
                            where: {
                                nr_codigo: codigoP
                            }
                        }
                    )

            } else if (mov == 'Saida') {

                if (p.qtd_atual - qtdM < 0){
                    resp.send({erro: 'A quantidade de produtos no estoque não pode ser menor que zero'})
                    return
                }


                    let r = await db.pcpjp2021_tb_produto.update({
                            qtd_atual: p.qtd_atual - qtdM
                        }, {
                            where: {
                                nr_codigo: codigoP
                            }
                        }
                    )

            }


                    let lucroM = (p.vl_venda - p.vl_custo) * qtdM


                let inserirControleEstoque =  {
                    id_produto: p.id_produto,
                    qtd_produtos: qtdM,
                    ds_movimentacao: mov,
                    vl_lucro: lucroM,
                    dt_movimentacao: new Date()
                }

                let i = await db.pcpjp2021_tb_controle_estoque.create(inserirControleEstoque)  

            resp.sendStatus(200)


        } catch (e) {
            resp.send({erro: e.toString()})
        }

    })





    

    app.get('/usuarioscadastrados', async (req, resp) => {
        try { 
             let usuarios = await db.pcpjp2021_tb_usuario.findAll ({
                where: { 
                    bt_ativo: true,
                    nm_usuario: " ",
                    ds_email: " ",
                    ds_turma: " ",
                    nr_chamada: " "
                }
            })
        resp.send(usuarios)

        } catch (e) {
            resp.send({erro: e.toString()})
        }
    })

    app.delete('/usuarioscadastrados/:idUsuario', async (req, resp) =>{
        try{
            let deletarUsu = await db.pcpjp2021_tb_usuario.destroy({
                where: {
                    id_usuario: req.params.idUsuario
                }
            })
        
        resp.sendStatus(200)

        } catch (e) {
            resp.send({erro: e.toString()})
        }
    })

    app.get('/controleEstoque', async (req, resp) => {
        try { 
            let controleEsto = await db.pcpjp2021_tb_controle_estoque.findAll({
                // where: {

                //},
                // include: ['id_produto_pcpjp2021_tb_produto']

                include: [{
                    model: 'id_produto_pcpjp2021_tb_produto',
                        include: {
                            model: 'pcpjp2021_tb_usuario',
                            required: true,
                            right: true
                        }
                }]
            })
            
            resp.send(controleEsto)

        } catch (e) {
            resp.send({erro: e.toString()})
        }
    })

app.listen(process.env.PORT,
                x => console.log('Server up at port ' + process.env.PORT))