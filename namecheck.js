const axios = require('axios')
if (process.argv.length < 3 || process.argv.length > 3) {
    console.log('node namecheck.js <velocidade em milessegundos>')
    process.exit(1)
}
var doidera = parseInt(process.argv[2])
const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question('Voce gostaria de mostrar nao disponiveis? [sim/nao]: ', (answer) => {
    switch (answer) {
        case 'sim':
            sim()
            break
        case 'nao':
            nao()
            break
        default:
            console.log("Escolha entre sim ou nao.")
            rl.close()
    }
    rl.close()
})

function nao() {
    setInterval(function () {
        function makeid() {
            var text = ""
            var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
            for (var i = 0; i < 3; i++)
                text += possible.charAt(Math.floor(Math.random() * possible.length))
            return text
        }
        let tempin = makeid()
        axios.get('https://api.mojang.com/users/profiles/minecraft/' + tempin).then(response => {
            if (response.data === "") {
                console.log("\x1b[32m", "Disponivel: ", "\x1b[0m" + tempin)
            }
        }).catch(error => {
            console.log("Muitas requests! (Troque de IP).")
        })
    }, doidera)
}

function sim() {
    setInterval(function () {
        function makeid() {
            var text = ""
            var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
            for (var i = 0; i < 3; i++)
                text += possible.charAt(Math.floor(Math.random() * possible.length))
            return text
        }
        let tempin = makeid()
        axios.get('https://api.mojang.com/users/profiles/minecraft/' + tempin).then(response => {
            if (response.data === "") {
                console.log("\x1b[32m", "Disponivel: ", "\x1b[0m" + tempin)
            } else {
                console.log("\x1b[31m", "Nao disponivel: ", "\x1b[0m" + tempin)
            }
        }).catch(error => {
            console.log("Muitas requests! (Troque de IP).")
        })
    }, doidera)
}