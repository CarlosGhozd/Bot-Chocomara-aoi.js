module.exports = {
    name: "set-rank-msg",
    code: `$description[1;Se le ha configurado el mensaje para:
\`$message\`]
$color[1;#FFD8F0]
$setServerVar[rmsg;$message]
$onlyIf[$message!=;También puedes usar estas variables:
\`\`\`
{user.tag} = $userTag
{user.ping} = <@$authorID>
{level} = 1
{exp} = 25
\`\`\`
El mensaje actual es:
\`$getServerVar[rmsg]\`]
$onlyBotPerms[mentioneveryone;managemessages;{newEmbed: {description:Necesito permiso
 \`MANAGE_MESSAGES\`/\`MENTION_EVERYONE\`}{color:ff2050}}]
$onlyPerms[admin;{newEmbed: {title:▸ ❌┇NO PUEDES!} {description::alert: No tienes los permisos suficientes para hacer esto} {color:ff0000} {footer:$username:$authorAvatar} {delete:10s} {timestamp:ms}}]

$cooldown[5s;Porfavor tienes que esperar **%time%**]

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