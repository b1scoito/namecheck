const chalk = require('chalk');
module.exports = {
    debug: function (text, thread) {
        const today = new Date(), time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        return console.log(`[ ${chalk.hex('#15dfff')(time)} ] ${chalk.hex('#ffff00')("DEBUG")} [${chalk.hex('#ff00ff')(thread)}] -> `, text);
    },
    info: function (text) {
        const today = new Date(), time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        return console.log(`[ ${chalk.hex('#15dfff')(time)} ] ${chalk.hex('#00ff00')("INFO")} -> `, text);
    },
    error: function (text, thread, error) {
        const today = new Date(), time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        return console.log(`[ ${chalk.hex('#15dfff')(time)} ] ${chalk.bold.hex('#ff5555')("ERROR")} [${chalk.hex('#ff00ff')(thread)}] on [${chalk.hex('#ff5555')(error)}] -> ${text}`);
    }
}