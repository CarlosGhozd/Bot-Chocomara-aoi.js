module.exports = ({
    name: "cum",
    code: `
  $description[1;<@$authorID> se vino en <@$mentioned[1;yes]>]
$color[1;RANDOM]
$image[1;$get[nsfw]]
$djsEval[const { nsfw} = require('nsfw-muichiro');

(async() => {
const pack = await nsfw('cum');
d.vars['nsfw'] = pack.link;
d.data.vars = d.vars
})()]

$onlyIf[$mentioned[1]!=$authorID;No te puedes venir en ti mismo!]
$onlyIf[$mentioned[1]!=$clientID;No gracias puedes hacerlo con otra persona ]
$onlyIf[$mentioned[1]!=;❌ debes mencionar a alguien. ]
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