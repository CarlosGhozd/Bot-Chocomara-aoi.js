module.exports = ({
    name: "$alwaysExecute",
    code: `> :x: | No envies Invitaciones a otros servidores $userTag[$authorID]
  $deletecommand
  $onlyIf[$theresInvite==true]
  $onlyIf[$hasAnyPerm[$guildID;$authorID;admin;manageserver]==false]
  $onlyIf[$getServerVar[Invite]==true]
`
})

/*
╔═════════════════════════════════════════════════════╗
║|| - || Desarrollado por Carlos Ghozd#2653 || - ||   ║
║   ----------| discord.io/chocomara |----------      ║
╚═════════════════════════════════════════════════════╝
*/