module.exports = {
    name: "set-join-msg",
    description: "Mensaje de Bienvenida",
    category: "Bienvenida",
    aliases: ["wcm", "swm"],
    code: `
 $onlyPerms[manageserver;Lo sentimos, ¡pero necesita los permisos de Manage_Server!]
$onlyIf[$message!=;:x: Ninguno mensaje proporcionado, también puedes usar estas variables: 
\`\`\`
{user} = $username
{user.tag} = $userTag
{user.ping} = <@$authorID>
{server} = $serverName\`\`\`]

$title[1;¡Mensaje de bienvenida establecido!]
$description[1;Nuevo mensaje de bienvenida:
$message]
$footer[1;Ahora configura la tarjeta de Bienvenida usando $getServerVar[prefix]setbackGround]
$addTimestamp[1]
$setServerVar[WelcomeMessage;$message]

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