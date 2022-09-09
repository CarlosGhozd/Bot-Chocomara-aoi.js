module.exports = [{
    name: "unban",
    code: `$unban[$message[1];$guildID]
 $title[1;¡Usuario Desbaneado!]
 $description[1;$usernane Has Desbaneado a $usertag[$message[1]]
 $color[1;RANDOM]]
 $onlyIf[$isBanned[$message[1];$guildID]==true;Este usuario no está baneado]
 $onlyIf[$hasPerms[$guildID;$authorID;ban]==true;No tienes permisos \`BAN\`]
 $onlyBotPerms[ban;No tengo permisos \`BAN\`]
$onlyIf[$getGlobalUserVar[blacklist]==false;{newEmbed:{title:Acceso Denegado!}
{description:> El usuario $userTag[$authorID] esta dentro de la blacklist de $userTag[$clientID] 
> Razon: **$getglobaluservar[rblacklist]**}
{color:ff0000}
{field:Que Puedo Hacer?:Lo que puedes hacer, es entrar al [Servidor de Soporte](https://discord.com/invite/dGB9fJ3azu) y discutir con $userTag[$botOwnerID] y saber el motivo de Baneo:yes}}]

`
}]

/*
╔═════════════════════════════════════════════════════╗
║|| - || Desarrollado por Carlos Ghozd#2653 || - ||   ║
║   ----------| discord.io/chocomara |----------      ║
╚═════════════════════════════════════════════════════╝
*/