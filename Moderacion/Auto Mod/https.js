module.exports = ({
    name: "$alwaysExecute",
    code: `> :x: | No envies links $userTag[$authorID]
  $deletecommand
  $onlyIf[$theresLink==true]
  $onlyIf[$hasAnyPerm[$guildID;$authorID;admin;manageserver]==false]
  $onlyIf[$getServerVar[Links]==true]
`
})

/*
╔═════════════════════════════════════════════════════╗
║|| - || Desarrollado por Carlos Ghozd#2653 || - ||   ║
║   ----------| discord.io/chocomara |----------      ║
╚═════════════════════════════════════════════════════╝
*/