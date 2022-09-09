module.exports = ({
    name: "slap",
    code: `$author[1;$username Le dio una bofetada a $username[$mentioned[1;yes]]]
$image[1;https://purrbot.site/img/sfw/slap/gif/slap_$randomText[001;002;003;004;005;006;007;008;009;010;011;012;013;014;015;016].gif]
$color[1;RANDOM]
$argsCheck[1;:negative_squared_cross_mark: | Debes Mencionar a Alguien]
$footer[1;]
$addTimestamp[1]

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