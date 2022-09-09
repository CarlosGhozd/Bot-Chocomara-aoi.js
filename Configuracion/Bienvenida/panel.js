module.exports = ({
    name: "panel-join",
    code: ` 
$title[1; Aca esta el panel!]

 $addField[1;Color;\`\`\`k
 $getServerVar[WelcomeColor]\`\`\`]


 $addField[1;Imagen;\`\`\`fix
 $getServerVar[bg]\`\`\`]

 $addField[1;Titulo;\`\`\`fix
 $getServerVar[bg]\`\`\`]


$description[1;
**Texto:** $replaceText[$replaceText[$replaceText[$replaceText[$getServerVar[WelcomeMessage];{user};$username];{user.ping};<@$authorID>];{server};$serverName];{user.tag};$userTag[$authorID]]

**Titulo:** $replaceText[$replaceText[$replaceText[$replaceText[$getServerVar[WelcomeTitle];{user};$username];{user.ping};<@$authorID>];{server};$serverName];{user.tag};$userTag[$authorID]]]
 $image[1;$getServerVar[bg]]
 $color[1;#FFD8F0]
`
})
// $addField[1;Thumbnail;\`\`\`fix $getServerVar[WelcomeThumbnail]\`\`\`]

/*
╔═════════════════════════════════════════════════════╗
║|| - || Desarrollado por Carlos Ghozd#2653 || - ||   ║
║   ----------| discord.io/chocomara |----------      ║
╚═════════════════════════════════════════════════════╝
*/