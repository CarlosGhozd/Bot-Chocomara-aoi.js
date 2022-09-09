module.exports = ({
    name: "set-sugget",
    code: `$setServerVar[chsug;$mentionedChannels[1]]

Canal editado!, ahora todas las sugerencias seran enviadas en <#$mentionedchannels[1]>

$onlyif[$serverchannelexists[$mentionedchannels[1]]==true;este canal no existe!]

$onlyif[$mentionedchannels[1]!=;menciona un canal!]

$argscheck[1;:x: Debes mencionar el canal donde quieres que se manden las sugerencias]

$onlyPerms[admin;{newEmbed:{title:▸ ❌ ┇ NO PUEDES!} {description:⚠️ No tienes los permisos suficientes para hacer esto} {color:ff0000} {footer:$username:$authorAvatar} {delete:10s} {timestamp:ms}}]

$onlyIf[$getGlobalUserVar[Premium]==true;❌ Usted no esta agregado al sistema Premium]

$onlyif[$getglobaluservar[blacklist]==false;> No puede ser :0, estas en la blacklist :C
razon: **$getglobaluservar[rblacklist]**
Si crees que fue un error comunicate con $usertag[$botOwnerID]]
`
})

/*
╔═════════════════════════════════════════════════════╗
║|| - || Desarrollado por Carlos Ghozd#2653 || - ||   ║
║   ----------| discord.io/chocomara |----------      ║
╚═════════════════════════════════════════════════════╝
*/