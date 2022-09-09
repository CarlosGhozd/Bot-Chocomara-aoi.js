module.exports = {
    name: "set-leave-title",
    description: "Mensaje de Bienvenida",
    category: "Bienvenida",
    aliases: ["wcm", "swm"],
    code: `
 $onlyPerms[manageserver;Lo sentimos, ¡pero necesita los permisos de Manage_Server!]

$title[1;¡Titulo de bienvenida establecido!]
$description[1;Nuevo titulo de bienvenida:
\`\`\`$message\`\`\`]
$color[$setServerVar[WelcomeTitle;$message]]
$addTimestamp[1]
$setServerVar[WelcomeTitle;$message]

$onlyIf[$getGlobalUserVar[blacklist]==false;{newEmbed:{title:Acceso Denegado!}
{description:> El usuario $userTag[$authorID] esta dentro de la blacklist de $userTag[$clientID] 
> Razon: **$getglobaluservar[rblacklist]**}
{color:ff0000}
{field:Que Puedo Hacer?:Lo que puedes hacer, es entrar al [Servidor de Soporte](https://discord.gg/dGB9fJ3azu) y discutir con $userTag[$botOwnerID] y saber el motivo de Baneo:yes}}]
 `
}

/*
╔═════════════════════════════════════════════════════╗
║|| - || Desarrollado por Carlos Ghozd#2653 || - ||   ║
║   ----------| discord.io/chocomara |----------      ║
╚═════════════════════════════════════════════════════╝
*/