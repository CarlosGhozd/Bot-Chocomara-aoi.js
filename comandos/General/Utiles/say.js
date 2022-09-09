module.exports = {
    name: "say",
    $if: "v4",
    code: `$if[$checkContains[$message;@here;@everyone;<@&]==false]
 $message
  $deletecommand
  $endif
  $suppressErrors
  $if[$checkContains[$message;@here;@everyone;<@&]==true]
**$username** No hagas ping a nadie
 $endif

$onlyBotPerms[managemessages;Necesito los permisos de **MANAGE_MESSAGES** para poder borrar mensajes]
$onlyIf[$getGlobalUserVar[blacklist]==false;{newEmbed:{title:Acceso Denegado!}
{description:> El usuario $userTag[$authorID] esta dentro de la blacklist de $userTag[$clientID] 
> Razon: **$getglobaluservar[rblacklist]**}
{color:ff0000}
{field:Que Puedo Hacer?:Lo que puedes hacer, es entrar al [Servidor de Soporte](https://discord.com/invite/dGB9fJ3azu) y discutir con $userTag[$botOwnerID] y saber el motivo de Baneo:yes}}]
 `


/*
╔═════════════════════════════════════════════════════╗
║|| - || Desarrollado por Carlos Ghozd#2653 || - ||   ║
║   ----------| discord.io/chocomara |----------      ║
╚═════════════════════════════════════════════════════╝
*/