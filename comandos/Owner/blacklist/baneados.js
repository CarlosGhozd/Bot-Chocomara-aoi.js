module.exports = {
    name: "baneados",
    code: `$author[1;🎃 | Malvados;$authoravatar]
$addField[1;> Ultimo desbaneado;$getvar[lastunblacklist];yes]
$addField[1;> Ultimo baneado;$getvar[lastblacklist];yes]
$addField[1;> Numero de baneados;$getvar[numblacklist];yes]
$color[1;RANDOM]

$onlyif[$getglobaluservar[blacklist]==false;> No puede ser :0, estas en la blacklist :C
razon: **$getglobaluservar[rblacklist]**
Si crees que fue un error comunicate con $usertag[$botOwnerID]]`
}