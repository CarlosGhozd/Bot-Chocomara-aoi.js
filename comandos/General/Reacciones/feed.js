module.exports = {
    name: "feed",
    code: `
  $title[1;$username le dio de comer a $username[$mentioned[1;yes]]]
$image[1;https://purrbot.site/img/sfw/feed/gif/feed_$randomText[001;002;003;004;005;006;007;008;009;010;011;012;013;014;015;016;017;018;019;020;021;022;023;024;025;026;027;028;029;030;031;032].gif]
$color[1;RANDOM]
$addTimestamp[1]

$onlyIf[$userExists[$mentioned[1]]==true;Menciona a alguien!]
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