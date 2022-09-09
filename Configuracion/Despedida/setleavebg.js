module.exports = {
    name: "set-leave-img",
    description: "tarjeta de despedida",
    category: "Despedida",
    aliases: ["setlbg"],
    code: `$setServerVar[lbg;$message[1]]
$title[1;BackGround cambiado]
$description[1;Hey, $username usted acaba de actualizar la tarjeta de despedida a 
$image[1;$message[1]]]
$color[1;#FFD8F0]
$onlyPerms[admin;{newEmbed: {title:▸ ❌┇NO PUEDES!} {description::alert: No tienes los permisos suficientes para hacer esto} {color:ff0000} {footer:$username:$authorAvatar} {delete:10s} {timestamp:ms}}]
$onlyIf[$message[1]!=;❌ Tienes que enviar el link multimedia de la imagen]
$addtimesTamp[1]

$onlyIf[$stringStartsWith[$message[1];https://]==true;Debe ingresar un enlace de imagen válido para que su backGround de despedida sea establecido.]

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