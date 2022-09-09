module.exports = {
    name: "set-bot-desc",
    code: `$addField[1;Ahora;$nomentionmessage;yes]
$addField[1;Antes;$getGlobalUserVar[desc;$clientID];yes]
$color[1;RANDOM]
$title[1;Actualize mi descripción!]
$setGlobalUserVar[desc;$nomentionmessage;$clientID]
$onlyIf[$authorID==901158845278191616;No]
`
}

/*
╔═════════════════════════════════════════════════════╗
║|| - || Desarrollado por Carlos Ghozd#2653 || - ||   ║
║   ----------| discord.io/chocomara |----------      ║
╚═════════════════════════════════════════════════════╝
*/