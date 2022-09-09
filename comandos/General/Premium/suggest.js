module.exports = ({
    name: "suggest",
    code: `$channelSendMessage[$getservervar[chsug];{newEmbed:{author:$usertag:$authoravatar}{title:**Nueva sugerencia!**}{description: 
$message }{color:RANDOM}{reactions:✔,❌}}]

$onlyif[$getservervar[chsug]!=;El canal de sugerencias no ha sido seteado!]

$argscheck[1;Escribe una sugerencia!]
$deletecommand

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