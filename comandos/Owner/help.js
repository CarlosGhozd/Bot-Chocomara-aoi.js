module.exports = [{
    name: "help",
    code: `$author[1;Comandos deL BOT;$userAvatar[$clientID];https://discord.com/invite/dGB9fJ3azu]
$thumbnail[1;$serverIcon]
$description[1;
**Prefix en este servidor:** \`$getServerVar[prefix]\`

**__Configuracion__**

**__Bienvenida__**
\`\`\`
- set-join-img - set-join-msg - set-join-channel -\`\`\`

**__Despedida__**
\`\`\`
- set-leave-img - set-leave-msg - set-leave-channel -\`\`\`
 **__Diversion__**
\`\`\`
- 8ball - afk - avatar - cat - confesion - howgay - tweet -\`\`\`

**__AutoMod__**
\`\`\`
- anti-logger off - anti-logger on - antibot-close - antibot-open - antispam off - antispam on - anti-invite - anti-link - anti-ping off - anti-ping on - antirole on - antirole off -\`\`\`

**__Mod__**
\`\`\`
- ban - command - kick - lock - mute - rolmute - unban - unlock - unmute - unwarn - warn - warnings -\`\`\`

**__Ticket__**
\`\`\`
- panel - set-role - set-category - remove-ticket-role - remove-category - enable-ticket - disable-ticket - claim - close -\`\`\`

**__Utiles__**
\`\`\`
- bot-info  - invite - profile - report-user - roleinfo - say -\`\`\`

**__Premium__**
\`\`\`
- clear - reset-prefix - set-prefix - set-sugget - suggest - setup-panel -\`\`\`

**__Rank__**
\`\`\`
- rank - reset-rank - set-rank - set-rank-msg -\`\`\`

**__Reacciones__**
\`\`\`
- cry  - feed - happy - hug - kiss - neko - pat - slap - waifu -\`\`\`

**__NSFW__**
\`\`\`
- anal - blowjob - cum - fuck-neko - pussylick - fuck-yaoi - fuck-yuri - waifu-nsfw - neko-nsfw -\`\`\`

**__Otros__**
\`\`\`- avatar-bot - set-bot-desc - set-desc - search-google - search-youtube -\`\`\`
]
$color[1;#FFD8F0]
$onlyIf[$message==;]
$footer[1;$serverName; $serverIcon]
$onlyIf[$getUserVar[command;$commandName]!=disabled;]
   $addbutton[1;To close;danger;closehelp;no;<:9636_Cross:1005605882719121438>]
  `
}, {
    name: "closehelp",
    type: "interaction",
    prototype: "button",
    code: `
$deleteMessage[$interactionData[message.id]]
  `
}]