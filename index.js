const aoijs = require('aoi.js');
const aoimongo = require("aoi.mongo");
const fs = require('fs');
const bot = new aoijs.AoiClient({
    token: "", //ponga el token de su bot aqui
    prefix: "$getServerVar[prefix]",
    intents: "all",
    database: {
        db: aoimongo,
        type: "aoi.mongo",
        path: ""  //ponga la url de la base de datos aqui (mongodb)
    }
});

// ———————————————CALLBLACK———————————————
bot.onJoin()
bot.onLeave()
bot.onMessage({
    guildOnly: true,
    respondToBots: false
});
bot.onRateLimit()
bot.onGuildJoin()
bot.onGuildLeave()
bot.onChannelDelete()
bot.onInteractionCreate()
//----------|HANDLER
const loader = new aoijs.LoadCommands(bot);
loader.load(bot.cmd, "./comandos/")
loader.setColors({
    walking: ["blink", "dim", "fgWhite"],
    failedWalking: {
        name: ["bright", "fgYellow", "underline"],
        text: ["gray", "fgRed"]
    },
    typeError: {
        command: ["bright", "fgYellow"],
        type: ["fgYellow"],
        text: ["bright", "fgRed"]
    },
    failLoad: {
        command: ["bright", "fgMagenta"],
        type: ["fgRed"],
        text: ["bright", "fgRed"],
    },
    loaded: {
        command: ["bright", "fgRed"],
        type: ["bright", "fgWhite"],
        text: ["bright", "fgBlue"]
    },
})
bot.channelDeleteCommand({
    channel: "1008158363248513095",
    code: ` $kick[$get[author];$guildID;AntiRaid Activado]
$onlyIf[5>$get[cases];]
 $djsEval[(async () => {
channel.guild.fetchAuditLogs({ type: 'CHANNEL_DELETE' }).then(audit => audit.entries.first()).then(async entry => {
    if(channel.id !== entry.target.id) return
    let member = await channel.guild.members.fetch(entry.executor.id).catch(e=>null)
    if(!member) return
    client.antiraid.add(channel.guild.id+'_'+entry.executor.id)
    if(!d.vars) d.vars = {}
    d.vars['cases'] = client.antiraid.check(channel.guild.id+'_'+entry.executor.id)
    d.vars['author'] = entry.executor.id
    d.data.vars = d.vars
})
})()]
$onlyIf[$guildId==989770876255887361;]`
})
bot.readyCommand({
    channel: "",
    code: `
    $title[1;Reinicio completo....]
  $description[1;<@!$clientID> esta lista, si quieres utilizarla pon **$getServerVar[prefix]help**.
  
 • **Estadisticas:**
Servidores: $serverCount
Miembros: $allMembersCount
Tiempo: $uptime

 • **Librerias:**
Aoi.js | v5]
  $color[1;GREEN]
   $addbutton[1;To close;danger;closehelp;no;<:9636_Cross:1005605882719121438>]`
}, {
    name: "closehelp",
    type: "interaction",
    prototype: "button",
    code: `
$deleteMessage[$interactionData[message.id]]
  `
})
bot.readyCommand({
    channel: "",
    code: `$log[Conectado a $userTag[$clientID]]`
})
bot.onRoleCreate()
bot.roleCreateCommand({
    code: `
$deleteRoles[$guildID;$roleid[$newRole[id]]]
$onlyIf[$getServerVar[antirole]==true]
 $suppressErrors`
})
bot.guildJoinCommand({
    channel: "$randomChannelID",
    code: `
$createApplicationCommand[$guildID;lock;Bloquear canal;true;slash;{
 "name" : "channel",
 "description" : "menciona un canal para bloquear",
 "type" : 7,
 "required" : false
 }]

 $createApplicationCommand[$guildID;unlock;Desbloquear canal;true;slash;{
 "name" : "channel",
 "description" : "menciona un canal para desbloquear",
 "type" : 7,
 "required" : false
 }]

$createApplicationCommand[$guildID;kick;Expuelsa a un usuario;true;slash;{
"name" : "options", 
"description" : "usuario y razón", 
"type" : "SUB_COMMAND",
"options" : [{
 "name" : "user",
 "description" : "usuario espulsado",
 "type" : 6,
 "required" : true
}, {
 "name" : "reason",
 "description" : "razón",
 "type" : 3,
 "required" : false}]
}
]

$createApplicationCommand[$guildID;avatar;Manda el avatar de alguien;true;CHAT_INPUT;{
"name": "usuario",
"description": "Menciona a alguien",
"type": 6,
"required": true
}]

$createApplicationCommand[$guildID;kiss;Besar a alguien;true;CHAT_INPUT;{
"name": "usuario",
"description": "Menciona a alguien",
"type": 6,
"required": true
}]

$createApplicationCommand[$guildID;hug;Abrazar a alguien;true;CHAT_INPUT;{
"name": "usuario",
"description": "Menciona a alguien",
"type": 6,
"required": true
}]

$createApplicationCommand[$guildID;feed;Darle de comer a alguien;true;CHAT_INPUT;{
"name": "usuario",
"description": "Menciona a alguien",
"type": 6,
"required": true
}]

$createApplicationCommand[$guildID;help;Puedes ver mi lista de comandos;true;CHAT_INPUT]
`
})
bot.command({
    name: "eval",
    code: `
$eval[$message]
$onlyForIDs[691072980100317194;]
`
})
bot.command({
    name: "ping",
    code: `Este es mi ping \`$ping ms\` `
});
//----------|RANK
bot.command({
    name: "$alwaysExecute",
    code: `$setUserVar[rexp;$sum[$getUserVar[rexp];100]]
    $setUserVar[lvl;$sum[$getUserVar[lvl];1]] 
    $setUserVar[exp;0]
   $description[1;Felicidades $username has subido de nivel!, sigue haci.

**Nivel:** Nivel: $sum[$getUserVar[lvl];1]
  $author[1;]
   $color[1;#cdf4ff]
   $thumbnail[1;$serverIcon]
   $addTimestamp[1]
    $footer[1; $username; https://cdn.discordapp.com/attachments/795965782944120862/798540261353193472/6286_tada_animated.gif]
   $onlyif[$getUserVar[exp]>=$getUserVar[rexp];]
   
   $onlyif[$isBot[$authorID]==false;]
 $deleteIn[5s]`
})
bot.command({
    name: "$alwaysExecute",
    code: `$setUserVar[exp;$sum[$getUserVar[exp];$random[1;4]]]
$onlyIf[$getServerVar[rsystem]>=1;]
$onlyForServers[$guildID;]`
})
bot.awaitedCommand({
    name: "errorrank",
    code: `$setServerVar[rch;]
$onlyForServers[$guildID;]
$onlyPerms[admin;{newEmbed: {title:▸ ❌┇NO PUEDES!} {description::alert: No tienes los permisos suficientes para hacer esto} {color:ff0000} {footer:$username:$authorAvatar} {delete:10s} {timestamp:ms}}]



$onlyif[$getglobaluservar[blacklist]==false;> No puede ser :0, estas en la blacklist :C
razon: **$getglobaluservar[rblacklist]**
Si crees que fue un error comunicate con $usertag[$botOwnerID]]
`
})
///////////////////
//////////BIENVENIDA
bot.joinCommand({
    channel: "$getServerVar[WelcomeChannel]",
    code: `
 $title[1;$replaceText[$replaceText[$replaceText[$replaceText[$getServerVar[WelcomeTitle];{user};$username];{user.ping};<@$authorID>];{server};$serverName];{user.tag};$userTag[$authorID]]]
 $description[1;$replaceText[$replaceText[$replaceText[$replaceText[$getServerVar[WelcomeMessage];{user};$username];{user.ping};<@$authorID>];{server};$serverName];{user.tag};$userTag[$authorID]]
 ]
  $thumbnail[1;$getServerVar[WelcomeThumbnail]]
  $image[1;$getServerVar[bg]]
 $footer[1;Ahora $serverName tiene $membersCount usuarios!;$serverIcon]
 $addTimestamp[1]
 $color[$getServerVar[WelcomeColor]]
`
}) 
//----------| Despedida
bot.leaveCommand({
    channel: "$getServerVar[LeaveChannel]",
    code: `$title[1;$replaceText[$replaceText[$replaceText[$replaceText[$getServerVar[LeaveTitle];{user};$username];{user.ping};<@$authorID>];{server};$serverName];{user.tag};$userTag[$authorID]]]
 $description[1;
$replaceText[$replaceText[$replaceText[$replaceText[$getServerVar[LeaveMessage];{user};$username];{user.ping};<@$authorID>];{server};$serverName];{user.tag};$userTag[$authorID]]]

 $image[1;$getServerVar[lbg]]
 $color[1;$getServerVar[LeaveColor]]
$footer[1;Ahora $serverName tiene $membersCount usuarios!;$serverIcon]
 $addTimestamp[1]
 $thumbnail[1;$getServerVar[LeaveThumbnail]]
`
}) 
//----------|FUNCION
bot.functionManager.createCustomFunction({
    name: '$theresLink',
    type: 'djs',
    code: async d => {
        const data = d.util.aoiFunc(d)
        let r = d.message.content.match(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g) ? 'true' : 'false'
        data.result = r
        return {
            code: d.util.setCode(data)
        }
    }
})
bot.functionManager.createCustomFunction({
    name: '$theresInvite',
    type: 'djs',
    code: async d => {
        const data = d.util.aoiFunc(d)
        let r = d.message.content.match(/discord\.gg\/[\S]{2,30}/gi) ? 'true' : 'false'
        data.result = r
        return {
            code: d.util.setCode(data)
        }
    }
})
//////ANTIRAID
bot.joinCommand({
    channel: "$getServerVar[antiraidlog]",
    code: `
$ban[$guildID;$authorID;7;Anti-Bots]
$title[1;Sistema Anti-Bot]
$description[1;
 **Nombre el bot**: $usertag[$authorID]

 **Razon**: Anti-Bots Activado!]
$footer[1;Sistema Anti-Bot;https://cdn.discordapp.com/emojis/989887146322169919.webp?size=56&quality=lossless]
$color[1;FF0000]
 $onlyIf[$getServerVar[antiraid]!=close;]
$onlyIf[$isBot[$authorID]!=false;] 
$onlyif[$getglobaluservar[blacklist]==false;> Estas En la Listanegra razon : Raider, Malicioso . Si crees que es un error ve al servidor de soporte ]
`
})
bot.command({
    name: "api",
    code: `
$title[1;$replaceText[$replaceText[$replaceText[$replaceText[$getServerVar[WelcomeTitle];{user};$username];{user.ping};<@$authorID>];{server};$serverName];{user.tag};$userTag[$authorID]]]
 $description[1;$replaceText[$replaceText[$replaceText[$replaceText[$getServerVar[WelcomeMessage];{user};$username];{user.ping};<@$authorID>];{server};$serverName];{user.tag};$userTag[$authorID]]
 ]
  $thumbnail[1;$getServerVar[WelcomeThumbnail]]
  $image[1;$getServerVar[bg]]
 $footer[1;Ahora $serverName tiene $membersCount usuarios!;$serverIcon]
  $getServerVar[WelcomeColor]
 $addTimestamp[1]
`
})
//----------| handler 
require('./utils/status')(bot)
require('./utils/callbacks')(bot)
require('./utils/variables')(bot)

///musica
const voice = new aoijs.Voice(bot, {
    soundcloud: {
        clientId: "iZIs9mchVcX5lhVRyQGGAYlNPVldzAoX",
    },
    cache: {
        cacheType: "Memory", //Disk
        enabled: true,
    },
});

/*
╔═════════════════════════════════════════════════════╗
║|| - || Desarrollado por Carlos Ghozd#2653 || - ||   ║
║   ----------| discord.io/chocomara |----------      ║
╚═════════════════════════════════════════════════════╝
*/