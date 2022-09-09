module.exports = {
    name: "cuddle",
    code: `$setUserVar[Hugs;$sum[$getUserVar[Hugs;$mentioned[1]];1];$mentioned[1]]
  $description[1;*Ahora tienen $sum[$getUserVar[Hugs;$mentioned[1]];1] abrazo!*]
  $title[1;$username abrazo a $username[$mentioned[1;yes]]]
$description[1;*Ahora tienen $sum[$getUserVar[Kiss;$mentioned[1]];1] besos.*]
$image[1;$randomText[https://purrbot.site/img/sfw/hug/gif/hug_$randomText[001;002;003;004;005;006;007;008;009;010;011;012;013;014;015;016;017;018;019;020;021;022;023;024;025;026;027;028;029;030;031;032].gif;https://purrbot.site/img/sfw/cuddle/gif/cuddle_$randomText[001;002;003;004;005;006;007;008;009;010;011;012;013;014;015;016;017;018;019;020;021;022;023;024;025;026;027;028;029;030;031;032].gif]]
$color[1;RANDOM]

$onlyIf[$mentioned[1]!=$authorID;Menciona a un usuario!]
$onlyIf[$userExists[$mentioned[1]]==true;Menciona a alguien!]
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