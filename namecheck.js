const req = require('request');
const log = require('./log.js');

/**
 * @return {string}
 */
function RandomString() {
    let text = "";
    const possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for (let i = 0; i < 3; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    return text;
}

setInterval(function () {
    let tempn = RandomString();

    req(`https://api.mojang.com/users/profiles/minecraft/${tempn}`, {json: true}, (err, res, body) => {
        if (err) log.error("what else", "idk", err);
        if (!body){
            log.debug("available", tempn);
        }
    })
}, parseInt(0));
