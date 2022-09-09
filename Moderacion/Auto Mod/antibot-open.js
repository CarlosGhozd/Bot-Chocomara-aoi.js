module.exports = {
    name: "antibot-open",
    code: `
 $onlyForIDs[$ownerID;Solo el propietario del servidor puede usar este comando]
 $setServerVar[antiraid;yes]
 $setServerVar[antiraidlog;$mentionedChannels[1]]
 $onlyIf[$message!=;{newEmbed:{title:AntiBots}{description:Para activar el AntiBot usa **$getservervar[prefix]antibot-open <#channel>**}{footer:Sistema AntiBot:https://cdn.discordapp.com/emojis/989887146322169919.webp?size=56&quality=lossless}{color:FF0000}]
 $title[1;AntiBots Activado]
 $description[1;El canal para el antibotlog se configuro para 
 el canal de <#$mentionedChannels[1]>]
 $footer[1;Para desactivar el sistema de Antibot usa $getservervar[prefix]antibot-close;https://cdn.discordapp.com/emojis/989887146322169919.webp?size=56&quality=lossless]
$color[1;FF0000]
`
}

/*
╔═════════════════════════════════════════════════════╗
║|| - || Desarrollado por Carlos Ghozd#2653 || - ||   ║
║   ----------| discord.io/chocomara |----------      ║
╚═════════════════════════════════════════════════════╝
*/