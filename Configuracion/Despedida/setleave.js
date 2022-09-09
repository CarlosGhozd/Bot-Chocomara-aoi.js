module.exports = {
    name: "set-leave-channel",
    description: "Canal de Despedida",
    category: "Despedida",
    aliases: ["lc", "slc"],
    code: `
 $onlyPerms[manageserver;Lo sentimos, ¡pero necesita los permisos de Manage_Server! ]
 $onlyIf[$mentionedChannels[1]!=;Puedes mencionar un canal para configurarlo como canal de despedida]
 $title[1;Listo!]
 $color[1;00FF00]
 $description[1;Configuré el canal de despedida en <#$mentionedChannels[1]>!]
 $footer[1;Ahora configura el mensaje de despedida usando $getServerVar[prefix]setleavemsg]
 $setServerVar[LeaveChannel;$mentionedChannels[1]]

$onlyIf[$getGlobalUserVar[blacklist]==false;{newEmbed:{title:Acceso Denegado!}
{description:> El usuario $userTag[$authorID] esta dentro de la blacklist de $userTag[$clientID] 
> Razon: **$getglobaluservar[rblacklist]**}
{color:ff0000}
{field:Que Puedo Hacer?:Lo que puedes hacer, es entrar al [Servidor de Soporte](https://discord.com/invite/dGB9fJ3azu) y discutir con $userTag[$botOwnerID] y saber el motivo de Baneo:yes}}]

 `
}

/*
╔═════════════════════════════════════════════════════╗
║|| - || Desarrollado por Carlos Ghozd#2653 || - ||   ║
║   ----------| discord.io/chocomara |----------      ║
╚═════════════════════════════════════════════════════╝
*/