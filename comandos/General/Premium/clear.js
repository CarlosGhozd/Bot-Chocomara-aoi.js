module.exports = {
    name: "clear",
    aliases: ['purge', 'clean'],
    code: `$deleteIn[10s]
$description[1;Se borraron $message mensajes!!]
  $footer[1;$username;$authorAvatar]
  $thumbnail[1;$serverIcon]
  $color[1;RANDOM]
  $author[1;Borrando.....;https://cdn.discordapp.com/attachments/795965782944120862/798540261353193472/6286_tada_animated.gif]
  
 $clear[$sum[$message[1];1]]
 $onlyIf[$message[1]<=1000;:x: Solo se puede eliminar un maximo de 1000 mensajes.]
 $onlyIf[$message[1]>=0;no puedo 0 mensajes]

$onlyIf[$isNumber[$message[1]]==true;Escribe un numero!]
 $onlyIf[$argsCount==1;Debe proporcionar un número entre 1-1000]

$onlyIf[$getGlobalUserVar[Premium]==true;❌ Usted no esta agregado al sistema Premium]
 
 $onlyPerms[managemessages;Necesitas los permisos de **MANAGE_MESSAGES** para poder borrar mensajes]
 $onlyBotPerms[managemessages;necesito los permisos de **MANAGE_MESSAGES** para poder borrar mensajes]
$suppressErrors

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