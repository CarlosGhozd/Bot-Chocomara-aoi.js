module.exports = ({
    name: "skip",
    code: `
  $skip
  $title[skip]
  $description[La musica musica a sido skipeada]
  $color[GREEN]

  $onlyif[$queueLength>=1;{newEmbed:{title: 404 ┃Error}{description:** Razon:
\`No ay mas musica que skipear\`**}{color:RED}{thumbnail:$serverIcon}}]

$onlyif[$voiceID!=;{newEmbed:{title: 404 ┃Error}{description:**Razon:
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