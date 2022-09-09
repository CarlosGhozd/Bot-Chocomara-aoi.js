module.exports = [{
    name: "avatar",
    aliases: ['av', 'usericon', 'pfp'],
    code: `$author[1;Avatar de $username[$findMember[$message]]]
    $description[1;Descargar avatar: [Click aquí]($get[owonya])]
    $image[1;$userAvatar[$findMember[$message]]]
    $color[1;D3FEFF]
    $addButton[1;Descargar avatar;link;$nonEscape[$get[owonya]]]
    $wait[2s]
    $let[owonya;$replaceText[$userAvatar[$findMember[$message]];webp;png]]

$onlyIf[$getGlobalUserVar[blacklist]==false;{newEmbed:{title:Acceso Denegado!}
{description:> El usuario $userTag[$authorID] esta dentro de la blacklist de $userTag[$clientID] 
> Razon: **$getglobaluservar[rblacklist]**}
{color:ff0000}
{field:Que Puedo Hacer?:Lo que puedes hacer, es entrar al [Servidor de Soporte](https://discord.gg/dGB9fJ3azu) y discutir con $userTag[$botOwnerID] y saber el motivo de Baneo:yes}}]
`
}]

/*
╔═════════════════════════════════════════════════════╗
║|| - || Desarrollado por Carlos Ghozd#2653 || - ||   ║
║   ----------| discord.io/chocomara |----------      ║
╚═════════════════════════════════════════════════════╝
*/