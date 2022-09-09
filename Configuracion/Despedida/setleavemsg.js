module.exports = {
    name: "set-leave-msg",
    description: "Mensaje de dispedida",
    category: "Despedida",
    aliases: ["slmsg"],
    code: `
 $onlyPerms[manageserver;Lo sentimos, ¡pero necesita los permisos de Manage_Server!]
$onlyIf[$message!=;:x: Ninguno mensaje proporcionado, 
\`\`\`también puedes usar estas variables:

{user} = $username
{user.tag} = $userTag
{user.ping} = <@$authorID>
{server} = $serverName\`\`\`]

$title[1;¡Mensaje de despedida establecido!]
$description[1;Nuevo mensaje de despedida:
$message]
$footer[1;Ahora configura la tarjeta de despedida usando $getservervar[prefix]setleavebackGround]
$addTimestamp[1]
$setServerVar[LeaveMessage;$message]

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