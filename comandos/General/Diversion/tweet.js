module.exports = {
    name: "tweet",
    code: `$thumbnail[1;https://techcrunch.com/wp-content/uploads/2014/06/twitter-rise.gif?w=730&crop=1]
$title[1;__**Twitter**__]
$color[1;005bff]
$description[1; 

$message]
$footer[1;$username;$userAvatar]
$addTimestamp[1]
$addReactions[💬;🔁;❤;🔼]
$deletecommand
$onlyIf[$message!=;❌ Tienes que tweetear algo!]

 $onlyBotPerms[managemessages;Necesito los permiso de \`MANAGE_CHANNEL\` para poder eliminar este mensaje]

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