module.exports = ({
    name: "pause",
    code: `
$color[FFDBAF]
$description[La musica a sido pausada.]
$pauseTrack

$onlyif[$queueLength>=1;{newEmbed:{title: 404┃Error}{description:** Razon:
\`Oye $userName la musica esta pesta pausada\`**}{color:RED}{thumbnail:$serverIcon}}]

$onlyif[$voiceID!=;{newEmbed:{title: 404 ┃Error}{description:** Razon:
\`No estas estas en el canal de voz\`**}{color:RED}{thumbnail:$serverIcon}}]

$cooldown[5]

$onlyif[$getUserVar[command;$commandName]!=disabled;]
`
})

/*
╔═════════════════════════════════════════════════════╗
║|| - || Desarrollado por Carlos Ghozd#2653 || - ||   ║
║   ----------| discord.io/chocomara |----------      ║
╚═════════════════════════════════════════════════════╝
*/