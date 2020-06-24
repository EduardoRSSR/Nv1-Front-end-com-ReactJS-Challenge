const path = require('path');                

module.exports= {
    entry: path.resolve(__dirname, 'src', 'index.js'),     // passa o arquivo que será aberto primeiro
    output: {
        path: path.resolve(__dirname, 'public'),           // local onde será salvo arquivo gerado (bundle)
        filename: 'bundle.js'                              // nome do arquivo gerado -> bundle.js 
    },
    devServer:{
        contentBase: path.resolve(__dirname, 'public'),
    },
    module: {                                               
        rules: [                                            // vai chamar as regras para os loaders(uma regra por loader)
            {
                test: /\.js$/,    // test é uma propriedade obrigarória. está pegando todos os arquivos que terminam com .js
                exclude: /node_modules/,                   // exlui do processo do babel os arquivos do node_module
                use:{                                      // indica qual loader será utilizado
                    loader: 'babel-loader',
                },
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use:[
                    {loader: 'style-loader'},
                    {loader: 'css-loader'},
                ]
            },
            {
                test: /.*\.(gif|png|jpe?g)$/i,
                use: {
                    loader: 'file-loader',
                }
            }
        ]
    },
};
