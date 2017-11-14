const { Command } = require('discord-akairo');
var logger = require('winston');
const mojimaker = require('moji-translate');

class ShitMojiMaker extends Command {
    constructor() {
        super('shitmoji', {
            ownerOnly: true,
            aliases: ['shitmoji']
        });
    }

    exec(message) {
        var msgContent = message.content.replace("!shitmoji", "").trim();
        return message.channel.send(mojimaker.translate(msgContent, true));
    }
}

module.exports = ShitMojiMaker;
