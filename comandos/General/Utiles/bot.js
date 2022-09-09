module.exports = {
    name: "bot-info",
    aliases: "stats",
    code: `$title[1;Mis Estadisticas!]
$description[1; 
Hola!, soy $username[$clientID], una bot multifuncional que tiene variedad de comandos que te encantaran, espero ser de tu agrado.

__**Mi hosting es de:**__ 24/7

__**Prefix original:**__ m/

 **__Informacion:__**

\`\`\`k
ID || $finduser[$clientID]
Version || $getServerVar[version]
Nombre || $userTag[$clientID]
Developer || $userTag[$botOwnerID]
Fecha de creacion || $creationDate[$clientID]
Lenguaje utilizado || aoi.js\`\`\`

**__Estadisticas:__**

\`\`\`k
Servidores || $serverCount
Usuarios || $allMembersCount
Canales generales || $allChannelsCount
Comandos || $commandsCount
Ram || $ram MB
CPU || $cpu
Ping: || $ping ms
Tiempo || $djsEval[Math.floor(client.uptime / 86400000);;yes] dias, $djsEval[Math.floor(client.uptime / 3600000) % 24;;yes] horas, $djsEval[Math.floor(client.uptime / 60000) % 60;;yes] minutos, $djsEval[Math.floor(client.uptime / 1000) % 60;;yes] segundos\`\`\`

・┈・✧₊˚‧ ⨯ ♡ ♡ ♡ ♡ ♡ ♡ ♡ ♡ ♡ ♡ ♡ ♡ ♡ ↷ ⨯・┈・
]
$color[1;RANDOM]
$cooldown[5s;Tines que esperar %time%!]

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