module.exports = {
    name: "anti-link",
    aliases: "als",
    code: `$setServerVar[Links;$replaceText[$replaceText[$replaceText[$message[1];1;false];2;true];3;truee]]
  $title[1;Anti Links $replaceText[$replaceText[$replaceText[$message[1];1;Desactivado];2;Activado];3;Activado]!]
  $addField[1;Utilidad;$replaceText[$replaceText[$replaceText[$message[1];1;Se desactivo];2;Elimina los Links];3;Elimina el link y warnea];yes]
  $addField[1;Tipo;$replaceText[$replaceText[$replaceText[$message[1];1;Desactivado];2;Activado];3;Modo Agresivo];yes]
  $color[1;RANDOM]
  $thumbnail[1;$serverIcon]
  $onlyBotPerms[admin;managemessages;Necesito el permiso de Gestionar Mensajes para esto!]
  $onlyIf[$message[1]!=$getServerVar[Links];Ya esta en ese modo!]
  $onlyIf[$message[1]>=1;Escribe un numero del 1 al 3
  1: Off
  2: On
  3: HardOn]
  $onlyIf[$message[1]<=3;Escribe un numero del 1 al 3
  1: Off
  2: On
  3: HardOn]
  $onlyIf[$isNumber[$message[1]]==true;Escribe un numero del 1 al 3
  1: Off
  2: On
  3: HardOn]
$onlyPerms[admin;manageserver;Necesitas el permiso de gestionar servidor para esto!]
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