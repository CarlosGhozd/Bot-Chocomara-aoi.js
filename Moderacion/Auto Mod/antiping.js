module.exports = [{
    name: "anti-ping off",
    code: `$title[1;Sistema Anti-pings desactivado]
  $color[1;RED]
  $description[1;Este sistema esta en modo **off**]
$setServerVar[antisay;false;$guildID]
$onlyForIDs[$ownerID;Solo el creador del server puedo usar este comando]
  $onlyif[$getglobaluservar[blacklist]==false;> Estas En la Listanegra razon : Raider, Malicioso . Si crees que es un error ve al servidor de soporte ]`
}, {
    name: "anti-ping on",
    code: `$title[1;Anti-ping activado!]
  $color[1;GREEN]
  $description[1;El sistema anti-ping esta listo para ejecutar!]
$setServerVar[antisay;true;$guildID]
$onlyForIDs[$ownerID;Solo el creador del server puedo usar este comando]
  $onlyif[$getglobaluservar[blacklist]==false;> Estas En la Listanegra razon : Raider, Malicioso . Si crees que es un error ve al servidor de soporte ]`
}, {
    name: "$alwaysExecute",
    code: `$title[1;$username]
$description[1;No uses el everyone ni here mientras el antiping este activado]
$color[1;RANDOM]
$deleteCommand
$onlyIf[$checkContains[$toLowercase[$message];@everyone;@here]==true;]
$onlyIf[$getServerVar[antisay]==true]
$suppressErrors[No lo uses $username]`
}]

/*
╔═════════════════════════════════════════════════════╗
║|| - || Desarrollado por Carlos Ghozd#2653 || - ||   ║
║   ----------| discord.io/chocomara |----------      ║
╚═════════════════════════════════════════════════════╝
*/