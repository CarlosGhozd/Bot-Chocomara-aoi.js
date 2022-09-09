module.exports = {
    name: "rank",
    aliases: ["level"],
    code: `$author[1;Sistema de rango!]
$image[1;https://vacefron.nl/api/rankcard?username=$replaceText[$username[$mentioned[1;yes]]; ;+;-1]&avatar=$userAvatar[$mentioned[1;yes]]?size=4096&level=$getUserVar[lvl;$mentioned[1;yes]]&rank=&currentxp=$getUserVar[exp;$mentioned[1;yes]]&nextlevelxp=$getUserVar[rexp;$mentioned[1;yes]]&previouslevelxp=0&custombg=$getServerVar[rbg]&xpcolor=ffffff&isboosting=true]
 $addTimestamp[1]
 $color[1;GREEN]
  
$onlyIf[$getServerVar[rsystem]>=1;{newEmbed: {description:El sistema de niveles está __deshabilitado__!!

**__Como utilizarlo__**
m!setrank *#channel*}{color:#FFD8F0}}]
$cooldown[5s;tienes que esperar %time%]


$onlyIf[$getGlobalUserVar[blacklist]==false;{newEmbed:{title:Acceso Denegado!}
{description:> El usuario $userTag[$authorID] esta dentro de la blacklist de $userTag[$clientID] 
> Razon: **$getglobaluservar[rblacklist]**}
{color:ff0000}
{field:Que Puedo Hacer?:Lo que puedes hacer, es entrar al [Servidor de Soporte](https://discord.gg/dGB9fJ3azu) y discutir con $userTag[$botOwnerID] y saber el motivo de Baneo:yes}}]
 
  `
}

/*
╔═════════════════════════════════════════════════════╗
║|| - || Desarrollado por Carlos Ghozd#2653 || - ||   ║
║   ----------| discord.io/chocomara |----------      ║
╚═════════════════════════════════════════════════════╝
*/