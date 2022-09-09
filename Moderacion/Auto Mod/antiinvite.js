module.exports = {
    name: "anti-invite",
    code: `$setServerVar[Invite;$replaceText[$replaceText[$replaceText[$message[1];1;false];2;true];3;true]]
 $title[1;Anti Invite $replaceText[$replaceText[$replaceText[$message[1];1;Desactivado];2;Activado];3;Activado]!]
  $addField[1;Utilidad;$replaceText[$replaceText[$replaceText[$message[1];1;Se desactivo];2;Elimina las Invitaciones de otros servidores];3;Elimina la invitación y warnea];yes]
  $addField[1;Tipo;$replaceText[$replaceText[$replaceText[$message[1];1;Desactivado];2;Activado];3;Modo Agresivo];yes]
  $color[1;RANDOM]
  $thumbnail[1;$serverIcon]
  $onlyBotPerms[admin;managemessages;Necesito el permiso de Gestionar Mensajes para esto!]
  $onlyIf[$message[1]!=$getServerVar[Invite];Ya esta en ese modo!]
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
$onlyif[$getglobaluservar[blacklist]==false;> No puede ser :0, estas en la blacklist :C
razon: **$getglobaluservar[rblacklist]**
Si crees que fue un error comunicate con $usertag[$botOwnerID]]
`
}

/*
╔═════════════════════════════════════════════════════╗
║|| - || Desarrollado por Carlos Ghozd#2653 || - ||   ║
║   ----------| discord.io/chocomara |----------      ║
╚═════════════════════════════════════════════════════╝
*/