module.exports = ({
    name: "suck",
    aliases: [""],
    code: `
    $description[1;<@$authorID> le esta chupando el nepe ah <@$mentioned[1;yes]>]
     $image[1;$randomText[https://verhentai.org/wp-content/uploads/2019/05/tetona-mamando-polla.gif; http://www.warpstorage.pro/images/hentaixxx.me/43/035_Hentai_Gif.jpg; https://www.webporno.xxx/wp-content/uploads/2021/05/anime-uniervsitaria-de-rodillas-chupandola.gif; https://static.hentai-gif-anime.com/upload/20200220/67/135796/detail.gif; https://static.hentai-gif-anime.com/upload/20200824/81/164414/detail.gif; https://static.hentai-gif-anime.com/upload/20160425/2/2304/detail.gif; https://static.hentai-gif-anime.com/upload/20170616/29/57394/detail.gif]]
     $color[1;RANDOM]
     $onlyIf[$mentioned[1]!=$authorID;Menciona ah alguien u.u]
$onlyIf[$mentioned[1]!=$clientID;No gracias ya tengo pareja -.-]
$onlyIf[$mentioned[1]!=;❌ debes mencionar a alguien. ]

$onlyNSFW[{newEmbed:{description:<@$authorID> si quieres utilizar este comando debes utilizarlo en un canal NSFW!}{color:RED}{image:https://i.imgur.com/oe4iK5i.gif}{thumbnail:$serverIcon}}]
    `
}) 

/*
╔═════════════════════════════════════════════════════╗
║|| - || Desarrollado por Carlos Ghozd#2653 || - ||   ║
║   ----------| discord.io/chocomara |----------      ║
╚═════════════════════════════════════════════════════╝
*/