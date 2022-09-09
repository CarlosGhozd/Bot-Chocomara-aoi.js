module.exports = [{
    name: "antispam off",
    code: `
$setServerVar[antispamconfig;off]
$reply
$color[1;ff2050]
$addTimestamp[1]
$title[1;Anti-Flood Desactivado]
$description[1;El sistema antiFlood fue desactivado! 
ahora podrán hacer flood] 
$onlyif[$authorID==$ownerID;sólo el owner de este servidor puede usar este comando!]
$onlyif[$getglobaluservar[blacklist]==false;> No puede ser :0, estas en la blacklist :C
razon: **$getglobaluservar[rblacklist]**
Si crees que fue un error comunicate con $usertag[$botOwnerID]]
`
}, {
    name: "antispam on",
    code: `
$setServerVar[antispamconfig;on]
$reply
$addTimestamp[1]
$color[1;ff2050]
$title[1;Anti-Flood Antivado]
$description[1;El sistema antiflood fue activado!
Ahora los admins y usuarios no podrán hacer flood]
$onlyif[$authorID==$ownerID;sólo el owner de este servidor puede usar este comando!]
$onlyif[$getglobaluservar[blacklist]==false;> No puede ser :0, estas en la blacklist :C
razon: **$getglobaluservar[rblacklist]**
Si crees que fue un error comunicate con $usertag[$botOwnerID]]`
}]

/*
╔═════════════════════════════════════════════════════╗
║|| - || Desarrollado por Carlos Ghozd#2653 || - ||   ║
║   ----------| discord.io/chocomara |----------      ║
╚═════════════════════════════════════════════════════╝
*/