module.exports = {
    name: "antibot-close",
    code: `
 $onlyForIDs[$ownerID;Solo el propietario del servidor puede usar este comando]
 $setServerVar[antiraid;close]
 $resetServerVar[antiraidlog]
 $title[1;AntiBots Descativado]
 $description[1;El sistema de antibot se desactivo correctamente]
 $footer[1;Para Activar el sistema de Antibot usa $getservervar[prefix]antibot-open;https://cdn.discordapp.com/emojis/989887146322169919.webp?size=56&quality=lossless]
$color[1;FF0000]
`
}

/*
╔═════════════════════════════════════════════════════╗
║|| - || Desarrollado por Carlos Ghozd#2653 || - ||   ║
║   ----------| discord.io/chocomara |----------      ║
╚═════════════════════════════════════════════════════╝
*/