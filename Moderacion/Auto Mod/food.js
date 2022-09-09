module.exports = ({
    name: "$alwaysExecute",
    $if: 'v4',
    code: `
$if[$getUserVar[antispam]==b$message[1]]
$deletecommand
$deleteIn[1s]
 $suppressErrors
$onlyIf[$findUser[$message[1]]!=$ownerID;]
$endif
$onlyIf[$getServerVar[antispamconfig]==on; ]
$if[$getUserVar[antispam]!=b$message[1]]
$setUserVar[antispam;b$message[1]]
$endif`
})

/*
╔═════════════════════════════════════════════════════╗
║|| - || Desarrollado por Carlos Ghozd#2653 || - ||   ║
║   ----------| discord.io/chocomara |----------      ║
╚═════════════════════════════════════════════════════╝
*/