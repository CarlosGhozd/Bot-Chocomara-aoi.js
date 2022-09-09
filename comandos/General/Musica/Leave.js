module.exports = ({
    name: "leave",
    aliases: "desconectar",
    code: `
  $title[Desconectada]
  $description[$username[$clientID] a sido removida del canal.]
$footer[$addTimestamp[1]]
$color[1;RED]
$leaveVc


  $onlyif[$getUserVar[command;$commandName]!=disabled;]
  
  `
})

/*
╔═════════════════════════════════════════════════════╗
║|| - || Desarrollado por Carlos Ghozd#2653 || - ||   ║
║   ----------| discord.io/chocomara |----------      ║
╚═════════════════════════════════════════════════════╝
*/