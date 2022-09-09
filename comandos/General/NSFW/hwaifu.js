module.exports = ({
    name: "hwaifu",
    code: `
  $title[1;Aqui tienes a tu waifu]
$image[1;$jsonRequest[https://api.waifu.pics/nsfw/waifu;url]]
$color[1;RANDOM]
$onlyNSFW[{newEmbed:{description:<@$authorID> si quieres utilizar este comando debes utilizarlo en un canal NSFW!}{color:RED}{image:https://i.imgur.com/oe4iK5i.gif}{thumbnail:$serverIcon}}]
$onlyIf[$getGlobalUserVar[blacklist]==false;{newEmbed:{title:Acceso Denegado!}
{description:> El usuario $userTag[$authorID] esta dentro de la blacklist de $userTag[$clientID] 
> Razon: **$getglobaluservar[rblacklist]**}
{color:ff0000}
{field:Que Puedo Hacer?:Lo que puedes hacer, es entrar al [Servidor de Soporte](https://discord.com/invite/dGB9fJ3azu) y discutir con $userTag[$botOwnerID] y saber el motivo de Baneo:yes}}]
  `
})

/*
╔═════════════════════════════════════════════════════╗
║|| - || Desarrollado por Carlos Ghozd#2653 || - ||   ║
║   ----------| discord.io/chocomara |----------      ║
╚═════════════════════════════════════════════════════╝
*/