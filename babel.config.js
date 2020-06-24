module.exports = { 
    presets:[
        '@babel/preset-env',            //vai converter o ES6+ para que o browser entenda
        '@babel/preset-react'           //vai adicionar as funcionalidades do React nessa conversão
    ],
    plugins: [
        '@babel/plugin-transform-runtime'
    ]
};