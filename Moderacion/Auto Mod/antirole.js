module.exports = [{
    name: "antirole on",
    code: `$title[1;Anti-Role Activado]
  $color[1;GREEN]
$setServerVar[antirole;true;$guildID]
$onlyForIDs[$ownerID;Solo el creador del server puedo usar este comando]
$onlyif[$getglobaluservar[blacklist]==false;> Estas en blacklist razon: **$getglobaluservar[rblacklist]**`
}, {
    name: "antirole off",
    code: `$title[1;Anti-Role Desactivado]
  $color[1;RED]
$setServerVar[antirole;false;$guildID]
$onlyForIDs[$ownerID;Solo el creador del server puedo usar este comando]
$onlyif[$getglobaluservar[blacklist]==false;> Estas en blacklist razon: **$getglobaluservar[rblacklist]**`
}]

/*
╔═════════════════════════════════════════════════════╗
║|| - || Desarrollado por Carlos Ghozd#2653 || - ||   ║
║   ----------| discord.io/chocomara |----------      ║
╚═════════════════════════════════════════════════════╝
*/