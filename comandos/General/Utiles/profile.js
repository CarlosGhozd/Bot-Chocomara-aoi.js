module.exports = {
    name: "profile",
    code: `$title[1;Perfil de $username[$mentioned[1;yes]]]
$thumbnail[1;$userAvatar[$mentioned[1;yes]]]
$color[1;RANDOM]
$addField[1;XP;Level -> $replaceText[$divide[$getUserVar[LvlXP;$mentioned[1;yes]];10000];.; | ] <- XP;yes]
$addField[1;Stats;Hugs: $getUserVar[Hugs;$mentioned[1;yes]]
Pats: $getUserVar[Pats;$mentioned[1;yes]]
Kiss: $getUserVar[Kiss;$mentioned[1;yes]];yes]
$addField[1;Descripción;$getGlobalUserVar[desc;$mentioned[1;yes]];yes]
$addField[1;Apodo;$getUserVar[Tag;$mentioned[1;yes]];yes]
$addField[1;Nombre;$userTag[$mentioned[1;yes]];yes]

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