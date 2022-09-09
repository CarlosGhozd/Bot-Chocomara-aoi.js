module.exports = ({
    name: "search-google",
    code: `$title[1;Tu busqueda fue:]
$description[1;Aqui tienes el Resultado!

**Buscaste:** $message

**Respuesta:** 
[Aqui](https://www.google.com/search?q=$message)
]
$color[1;GREEN]
$onlyIf[$message!=;;:x:┃ Di algo para Buscar.]
$onlyif[$isMentioned[$mentioned[1]]==false;:x_:┃No puedes mencionar un usuario.]
$footer[1;]
$thumbnail[1;$serverIcon]

$onlyIf[$getGlobalUserVar[blacklist]==false;{newEmbed:{title:Acceso Denegado!}
{description:> El usuario $userTag[$authorID] esta dentro de la blacklist de $userTag[$clientID] 
> Razon: **$getglobaluservar[rblacklist]**}
{color:34a6ef}
{field:Que Puedo Hacer?:Lo que puedes hacer, es entrar al [Servidor de Soporte](https://discord.com/invite/dGB9fJ3azu) y discutir con $userTag[$botOwnerID] y saber el motivo de Baneo:yes}}]
`
})
/*
╔═════════════════════════════════════════════════════╗
║|| - || Desarrollado por Carlos Ghozd#2653 || - ||   ║
║   ----------| discord.io/chocomara |----------      ║
╚═════════════════════════════════════════════════════╝
*/