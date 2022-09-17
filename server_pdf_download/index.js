const { exec } = require('node:child_process')

exec('python buscador.py', (erro, res) => {
    if (erro) {
        console.error("erro: ", erro)
        return 
    }

    console.log(res)
})