module.exports = {
    name: "stop",
    code: `

  $stop
  $title[1;Stop]
  $description[1;La musica se detuvo.]
  $color[1;RED]


$onlyif[$queueLength>=1;{newEmbed:{title: 404 ┃Error}{description:**Razon:
\`No ay mas musica que stopear\`**}{color:RED}{thumbnail:$serverIcon}}]

$onlyif[$voiceID!=;{newEmbed:{title: 404 ┃Error}{description:**Razon:
\`No estas estas en el canal de voz\`**}{color:RED}{thumbnail:$serverIcon}}]

$onlyif[$getUserVar[command;$commandName]!=disabled;]
  `
}

/*
╔═════════════════════════════════════════════════════╗
║|| - || Desarrollado por Carlos Ghozd#2653 || - ||   ║
║   ----------| discord.io/chocomara |----------      ║
╚═════════════════════════════════════════════════════╝
*/