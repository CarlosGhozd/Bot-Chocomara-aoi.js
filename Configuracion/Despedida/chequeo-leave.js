module.exports = ({
    name: "embed-leave",
    code: `
$title[1;$replaceText[$replaceText[$replaceText[$replaceText[$getServerVar[WelcomeTitle];{user};$username];{user.ping};<@$authorID>];{server};$serverName];{user.tag};$userTag[$authorID]]]
 $description[1;$replaceText[$replaceText[$replaceText[$replaceText[$getServerVar[WelcomeMessage];{user};$username];{user.ping};<@$authorID>];{server};$serverName];{user.tag};$userTag[$authorID]]
 ]
  $thumbnail[1;$getServerVar[LeaveThumbnail]]
  $image[1;$getServerVar[bg]]
 $footer[1;Ahora $serverName tiene $membersCount usuarios!;$serverIcon]
 $addTimestamp[1]
 $color[$getServerVar[WelcomeColor]]
`
})

/*
╔═════════════════════════════════════════════════════╗
║|| - || Desarrollado por Carlos Ghozd#2653 || - ||   ║
║   ----------| discord.io/chocomara |----------      ║
╚═════════════════════════════════════════════════════╝
*/