module.exports = [{
    name: "anti-logger off",
    code: `$title[1;Sistema Anti-Ip logger desactivado]
  $description[1;Ya no podre protegeré tu servidor de ip loggers]
  $color[1;RED]
$setServerVar[antilogger;false;$guildID]
$onlyForIDs[$ownerID;843490108170829874;Solo el creador del server puedo usar este comando]
  $onlyIf[$getGlobalUserVar[blacklist]==false;{newEmbed:{title:Acceso Denegado!}
{description:> El usuario $userTag[$authorID] esta dentro de la blacklist de $userTag[$clientID] 
> Razon: **$getglobaluservar[rblacklist]**}
{color:ff0000}
{field:Que Puedo Hacer?:Lo que puedes hacer, es entrar al [Servidor de Soporte](https://discord.gg/dGB9fJ3azu) y discutir con $userTag[$botOwnerID] y saber el motivo de Baneo:yes}}]`
}, {
    name: "anti-ilogger on",
    code: `$title[1;Sistema Anti-Ip logger activado]
  $description[1;Protegeré tu server de ip loggers]
  $color[1;GREEN]
$setServerVar[antilogger;true;$guildID]
$onlyForIDs[$ownerID;843490108170829874;Solo el creador del server puedo usar este comando]
 $onlyIf[$getGlobalUserVar[blacklist]==false;{newEmbed:{title:Acceso Denegado!}
{description:> El usuario $userTag[$authorID] esta dentro de la blacklist de $userTag[$clientID] 
> Razon: **$getglobaluservar[rblacklist]**}
{color:ff0000}
{field:Que Puedo Hacer?:Lo que puedes hacer, es entrar al [Servidor de Soporte](https://discord.gg/Q2QmuKb4D7) y discutir con $userTag[$botOwnerID] y saber el motivo de Baneo:yes}}]`
}, {
    name: "$alwaysExecute",
    code: `$title[1;$username]
$description[1;Acabas de mandar un ip logger un ip logger sirve para saber la ubicacion de otras personas, y en este server no esta permitido]
$deleteCommand
$color[1;RANDOM]
$onlyIf[$checkContains[$toLowercase[$message];https://grabify;http://grabify;https://iplogger;https://maper;https://2no;https://yip;https://ipgraber;https://ipgrabber;https://iplis;https://02ip;https://ezstat;https://www.ps3cfw;https://ps3cfw]==true]
$onlyIf[$getServerVar[antilogger]==true]
$suppressErrors[Elimine tu iplogger $username]`
}]

/*
╔═════════════════════════════════════════════════════╗
║|| - || Desarrollado por Carlos Ghozd#2653 || - ||   ║
║   ----------| discord.io/chocomara |----------      ║
╚═════════════════════════════════════════════════════╝
*/