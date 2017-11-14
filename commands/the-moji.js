const { Command } = require('discord-akairo');
var logger = require('winston');
const mojimaker = require('moji-translate');

class MojiMaker extends Command {
    constructor() {
        super('moji', {
            ownerOnly: true,
            aliases: ['moji']
        });
    }

    exec(message) {
        var msgContent = message.content.replace("!moji", "").trim();
        return message.channel.send(mojimaker.translate(msgContent, false));
    }
}

module.exports = MojiMaker;
