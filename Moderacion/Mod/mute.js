module.exports = ({
    name: "mute",
    code: ` $giveRoles[$mentioned[1];$getservervar[rolmute]]
  
  $description[1;El usuario <@$mentioned[1]> fue muteado con exito!

    Razon: $replaceText[$replaceText[$checkCondition[$messageSlice[1]==];true;sin razon especificada.];false;$messageSlice[1]]
    Por: <@$authorid>
  ]
  $color[1;RANDOM]
$onlyif[$mentioned[1]!=$authorid;no te mutees a ti mismo :c]
$onlyif[$mentioned[1]!=;menciona a alguien!]
$onlyPerms[admin;{newEmbed: {title:▸ ❌┇NO PUEDES!} {description::alert: No tienes los permisos suficientes para hacer esto} {color:ff0000} {footer:$username:$authorAvatar} {delete:10s} {timestamp:ms}}]
$onlybotperms[manageroles;necesito los permisos de **MANAGE_ROLES** para mutear a alguien!]
$onlyif[$getservervar[rolmute]!=;el rol de muteado no se ha establecido!]
$argscheck[1;error! Uso correcto: $getServerVar[prefix]mute <mencion del usuario a mutear> <razon (opcional)>]
  
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