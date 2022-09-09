module.exports = {
    name: "set-leave-color",
    description: "Mensaje de Bienvenida",
    category: "Bienvenida",
    aliases: ["wcm", "swm"],
    code: `
 $onlyPerms[manageserver;Lo sentimos, ¡pero necesita los permisos de Manage_Server!]

$title[1;¡Color de despedida establecido!]
$description[1;Nuevo color de despedida:
\`\`\`$message\`\`\`]
$color[$message[1]]
$addTimestamp[1]
$setServerVar[LeaveColor;$message]

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