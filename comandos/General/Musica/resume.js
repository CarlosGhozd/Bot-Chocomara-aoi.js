module.exports = ({
    name: "resume",
    code: `
$color[GREEN]
$description[La musica volvio a reproducirse.]
$resumeTrack

$onlyif[$queueLength>=1;{newEmbed:{title: 404┃Error}{description:** Razon:
Oye $userName la musica se esta reproduciendo}{color:RED}{thumbnail:$serverIcon}}]

$onlyif[$voiceID!=;{newEmbed:{title: 404 ┃Error}{description:** Razon:
\`No estas estas en el canal de voz\`**}{color:RED}{thumbnail:$serverIcon}}]

$onlyif[$getUserVar[command;$commandName]!=disabled;]
`
})

/*
╔═════════════════════════════════════════════════════╗
║|| - || Desarrollado por Carlos Ghozd#2653 || - ||   ║
║   ----------| discord.io/chocomara |----------      ║
╚═════════════════════════════════════════════════════╝
*/