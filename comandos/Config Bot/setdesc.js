module.exports = {
    name: "set-desc",
    aliases: "setdescription",
    code: `$setGlobalUserVar[desc;$nomentionmessage]
$title[1;Descripción Actualizada!]
$description[1;**Tu descripción antes**:
$getGlobalUserVar[desc]
**Tu descripción ahora**:
$noMentionMessage]
$color[1;GREEN]
$footer[1;Para ver tu descripción utiliza $getServerVar[prefix]profile]
$onlyIf[$getGlobalUserVar[desc]!=$noMentionMessage;Ya tienes esa descripción!]
$onlyIf[$noMentionMessage!=;Escribe algo!]

$onlyIf[$getGlobalUserVar[blacklist]==false;{newEmbed:{title:Acceso Denegado!}
{description:> El usuario $userTag[$authorID] esta dentro de la blacklist de $userTag[$clientID] 
> Razon: **$getglobaluservar[rblacklist]**}
{color:RED}
{field:Que Puedo Hacer?:Lo que puedes hacer, es entrar al [Servidor de Soporte](https://discord.gg/dGB9fJ3azu) y discutir con $userTag[$botOwnerID] y saber el motivo de Baneo:yes}}]

`
}

/*
╔═════════════════════════════════════════════════════╗
║|| - || Desarrollado por Carlos Ghozd#2653 || - ||   ║
║   ----------| discord.io/chocomara |----------      ║
╚═════════════════════════════════════════════════════╝
*/