module.exports = {
    name: "pat",
    code: `
 $setUserVar[Pats;$sum[$getUserVar[Pats;$mentioned[1]];1];$mentioned[1]]
$title[1;$username acaricio a $username[$mentioned[1;yes]]]
$image[1;https://purrbot.site/img/sfw/pat/gif/pat_$randomText[001;002;003;004;005;006;007;008;009;010;011;012;013;014;015;016].gif]
$footer[1;$username[$mentioned[1]] tiene ahora acaria $sum[$getUserVar[Pats;$mentioned[1]];1]! acaricias]
$color[1;RANDOM]
$onlyIf[$isMentioned[$mentioned[1]]==true;Debes Mencionar a Alguien]
$argsCheck[1;:negative_squared_cross_mark: | Debes Mencionar a Alguien]
$addTimestamp[1]
$cooldown[5s;:negative_squared_cross_mark: | Espera %time%]

$onlyIf[$getGlobalUserVar[blacklist]==false;{newEmbed:{title:Acceso Denegado!}
{description:> El usuario $userTag[$authorID] esta dentro de la blacklist de $userTag[$clientID] 
> Razon: **$getglobaluservar[rblacklist]**}
{color:ff0000}
{field:Que Puedo Hacer?:Lo que puedes hacer, es entrar al [Servidor de Soporte](https://discord.com/invite/dGB9fJ3azu) y discutir con $userTag[$botOwnerID] y saber el motivo de Baneo:yes}}]

 `
}

/*
╔═════════════════════════════════════════════════════╗
║|| - || Desarrollado por Carlos Ghozd#2653 || - ||   ║
║   ----------| discord.io/chocomara |----------      ║
╚═════════════════════════════════════════════════════╝
*/