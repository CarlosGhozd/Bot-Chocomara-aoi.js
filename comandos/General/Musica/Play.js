module.exports = [{
    name: "play",
    aliases: ['p'],
    code: `$if[$voiceID[$authorID]==;{execute:noVcError};{execute:vcCheck}]`
}, {
    name: "vcCheck",
    type: "awaited",
    code: `$if[$voiceID[$clientID]==;{execute:joinNPlay};{execute:playMusic}]
$onlyIf[$message!=;{newEmbed:{title:$customEmoji[anotcheckmark] | Error.}{description:¡Necesitas ingresar el titulo o el enlace de alguna canción!}{color:RED}}]
$onlyBotPerms[speak;$customEmoji[anotcheckmark] | Necesito permiso para **hablar** en canales de voz.]
$onlyBotPerms[connect;$customEmoji[anotcheckmark] | Necesito permiso para **conectar** a canales de voz.]`
}, {
    name: "joinNPlay",
    type: "awaited",
    code: `$if[$checkContains[$message;https://soundcloud.com;https://www.youtube.com;https://soundcloud.app.goo.gl;https://youtu.be]==true;{execute:playLink};{execute:playNormal}]
$loopMode[none]
$wait[2s]
$joinVc[$voiceID[$authorID]]`
}, {
    name: "playLink",
    type: "awaited",
    code: `$if[$checkContains[$message;https://soundcloud.com;https://soundcloud.app.goo.gl]==true;{execute:soundcloudMode};{execute:youtubeMode}]
$onlyIf[$voiceID[$authorID]==$voiceID[$clientID];{newEmbed:{title:$customEmoji[anotcheckmark] | Acción denegada.}{description:Necesitas estar en el canal de voz donde estoy yo para reproducir música.}}]`
}, {
    name: "soundcloudMode",
    type: "awaited",
    code: `
$color[1;ORANGE]
$footer[1;Potenciado por SoundCloud;https://1000marcas.net/wp-content/uploads/2020/10/SoundCloud-Logo.png]
$description[1;
**__Musica:__**
$get[songTitle] // $get[songAuthor]

**$get[songDuration]**
]
$thumbnail[1;$get[songCover]]
$title[1;$customEmoji[aMusic] | Reproduciendo;$get[songUrl]]
$let[songUrl;$songInfo[url;$sub[$queueLength;1]]]
$let[songCover;$songInfo[thumbnail;$sub[$queueLength;1]]]
$let[songDuration;$replaceText[$replaceText[$replaceText[$parseDate[$songInfo[duration;$sub[$queueLength;1]];time];hour;hora];minute;minuto];second;segundo]]
$let[songAuthor;$songInfo[author;$sub[$queueLength;1]]]
$let[songTitle;$songInfo[title;$sub[$queueLength;1]]]
$suppressErrors
$let[hide;$playTrack[soundcloud;$message]]`
}, {
    name: "youtubeMode",
    type: "awaited",
    code: `
$color[1;GREEN]
$description[1;
**__Musica:__**
$get[songTitle] // $get[songAuthor]

**$get[songDuration]**
]
$thumbnail[1;$get[songCover]]
$title[1;$customEmoji[aMusic] | Reproduciendo;$get[songUrl]]
$let[songUrl;$songInfo[url;$sub[$queueLength;1]]]
$let[songCover;$songInfo[thumbnail;$sub[$queueLength;1]]]
$let[songDuration;$replaceText[$replaceText[$replaceText[$parseDate[$songInfo[duration;$sub[$queueLength;1]];time];hour;hora];minute;minuto];second;segundo]]
$let[songAuthor;$songInfo[author;$sub[$queueLength;1]]]
$let[songTitle;$songInfo[title;$sub[$queueLength;1]]]
$suppressErrors
$let[hide;$playTrack[url;$message]]`
}, {
    name: "playMusic",
    type: "awaited",
    code: `$if[$checkContains[$message;https://soundcloud.com;https://www.youtube.com;https://soundcloud.app.goo.gl;https://youtu.be]==true;{execute:playLink};{execute:playNormal}]`
}, {
    name: "playNormal",
    type: "awaited",
    code: `
$color[1;GREEN]
 $footer[1;]
$description[1;
**__Musica:__**
$get[songTitle]
$footer[1;$get[songDuration]]
]

$thumbnail[1;$get[songCover]]
$title[1;🎧 Ahora suena ♪;$get[songUrl]]
$let[songUrl;$songInfo[url;$sub[$queueLength;1]]]
$let[songCover;$songInfo[thumbnail;$sub[$queueLength;1]]]
$let[songDuration;$replaceText[$replaceText[$replaceText[$parseDate[$songInfo[duration;$sub[$queueLength;1]];time];hour;hora];minute;minuto];second;segundo]]
$let[songAuthor;$songInfo[author;$sub[$queueLength;1]]]
$let[songTitle;$songInfo[title;$sub[$queueLength;1]]]
$suppressErrors
$let[hide;$playTrack[youtube;$message]]
$onlyIf[$voiceID[$authorID]==$voiceID[$clientID];{newEmbed:{title:$customEmoji[anotcheckmark] | Acción denegada.}{description:Necesitas estar en el canal de voz donde estoy yo para reproducir música.}{color:RED}}]`
}, {
    name: "noVcError",
    type: "awaited",
    code: `$sendMessage[{newEmbed:{title:$customEmoji[anotcheckmark] | Acción denegada.}{description:¡Necesitas estar en un canal de voz!}{color:RED}};no]`
}]


/*
╔═════════════════════════════════════════════════════╗
║|| - || Desarrollado por Carlos Ghozd#2653 || - ||   ║
║   ----------| discord.io/chocomara |----------      ║
╚═════════════════════════════════════════════════════╝
*/