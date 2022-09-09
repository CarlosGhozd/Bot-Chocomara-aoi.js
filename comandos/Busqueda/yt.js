module.exports = ({
    name: "search-youtube",
    aliases: "youtube-search",
    code: `$title[1;Busqueda en Youtube.]
$description[1;Aqui tienes el Resultado!

** Buscastes:** $message

 **Resultado:** [Aqui](https://www.youtube.com/results?search_query=$replaceText[$message; ;+;-1])]
$image[1;https://app.resetxd.repl.co/webshot?website=https://www.youtube.com/results?search_query=$replaceText[$message; ;+;-1]]
$color[1;RANDOM]
$onlyIf[$message!=;Di algo para Buscar.]
$onlyif[$isMentioned[$mentioned[1]]==false;No puedes mencionar un usuario.]
$footer[1;]
$thumbnail[1;$serverIcon]

$onlyIf[$getGlobalUserVar[blacklist]==false;{newEmbed:{title:Acceso Denegado!}
{description:> El usuario $userTag[$authorID] esta dentro de la blacklist de $userTag[$clientID] 
> Razon: **$getglobaluservar[rblacklist]**}
{color:34a6ef}
{field:Que Puedo Hacer?:Lo que puedes hacer, es entrar al [Servidor de Soporte](https://discord.gg/dGB9fJ3azu) y discutir con $userTag[$botOwnerID] y saber el motivo de Baneo:yes}}]

`
})

/*
╔═════════════════════════════════════════════════════╗
║|| - || Desarrollado por Carlos Ghozd#2653 || - ||   ║
║   ----------| discord.io/chocomara |----------      ║
╚═════════════════════════════════════════════════════╝
*/