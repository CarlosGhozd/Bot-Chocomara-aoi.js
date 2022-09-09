module.exports = ({
    name: "lock",
    $if: "v4",
    code: `$title[1;✅ ┃ Canal bloqueado con Exito!]
$color[1;RANDOM]
$modifyChannelPerms[$guildID;$channelID;-sendmessage]
$onlyBotPerms[managechannel;Necesito los permiso de \`MANAGE_CHANNEL\` para bloquear este canal]
$onlyPerms[managechannel;Necesitas el permiso de \`MANAGE_CHANNEL\` para Bloquear este canal]
$thumbnail[1;$serverIcon]
$footer[1;Canal bloqueado por: $username#$discriminator]
$addTimestamp[1]

$onlyIf[$getGlobalUserVar[blacklist]==false;{newEmbed:{title:Acceso Denegado!}
{description:> El usuario $userTag[$authorID] esta dentro de la blacklist de $userTag[$clientID] 
> Razon: **$getglobaluservar[rblacklist]**}
{color:ff0000}
{field:Que Puedo Hacer?:Lo que puedes hacer, es entrar al [Servidor de Soporte](https://discord.com/invite/dGB9fJ3azu) y discutir con $userTag[$botOwnerID] y saber el motivo de Baneo:yes}}]

`
})

/*
╔═════════════════════════════════════════════════════╗
║|| - || Desarrollado por Carlos Ghozd#2653 || - ||   ║
║   ----------| discord.io/chocomara |----------      ║
╚═════════════════════════════════════════════════════╝
*/