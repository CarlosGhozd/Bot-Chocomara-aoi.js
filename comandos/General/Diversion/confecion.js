module.exports = {
    name: "confesion",
    code: `
  $title[1;Nueva ConfesiΓ³n]
$description[1;β$messageβ]
$footer[1;π΅οΈβAnonimo]
$onlyIf[$message!=;Tienes que escribir lo que quieres confesar ]
$deletecommand
$onlyBotPerms[managemessages;Necesito los permiso de \`MANAGE_CHANNEL\` para poder eliminar este mensaje]
$color[1;RANDOM]

$onlyIf[$getGlobalUserVar[blacklist]==false;{newEmbed:{title:Acceso Denegado!}
{description:> El usuario $userTag[$authorID] esta dentro de la blacklist de $userTag[$clientID] 
> Razon: **$getglobaluservar[rblacklist]**}
{color:ff0000}
{field:Que Puedo Hacer?:Lo que puedes hacer, es entrar al [Servidor de Soporte](https://discord.gg/dGB9fJ3azu) y discutir con $userTag[$botOwnerID] y saber el motivo de Baneo:yes}}]
 
  `
}

/*
βββββββββββββββββββββββββββββββββββββββββββββββββββββββ
β|| - || Desarrollado por Carlos Ghozd#2653 || - ||   β
β   ----------| discord.io/chocomara |----------      β
βββββββββββββββββββββββββββββββββββββββββββββββββββββββ
*/