module.exports = ({
    name: "rolmute",
    code: `$setservervar[rolmute;$mentionedroles[1]]
  
  $description[1;El rol de muteado fue seteado con exito al rol <@$mentionedroles[1]>]
  $color[1;RANDOM]
    
$onlyif[$mentionedRoles[1]!=;menciona un rol!]

$onlyPerms[admin;{newEmbed: {title:▸ ❌┇NO PUEDES!} {description::alert: No tienes los permisos suficientes para hacer esto} {color:ff0000} {footer:$username:$authorAvatar} {delete:10s} {timestamp:ms}}]

$onlybotperms[manageroles;necesito los permisos de **MANAGE_ROLES** para setear el rol!]

  $argscheck[1;menciona el rol para setear!]
  
  
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