module.exports = {
    name: "ban",
    $if: "v4",
    description: "banear y luego desbanear a un usuario para eliminar mensajes con un motivo opcional. ",
    usage: "ban [<ID/MENTION/Name User]",
    permissions: ["sendMessages", "Ban"],
    cooldown: "8s",
    code: `$deleteIn[20s]
$color[1;RANDOM] 
$author[1;El Usuario fue baneado correctamente]
$addField[1;Sobre:;
Reason:
> $replaceText[$replaceText[$checkCondition[$messageSlice[1]==];true;No se proporcionó una razón];false;$messageSlice[1]]
Date:
> $day $month $year
]
$addField[1;Informacion del usuario;
$userTag[$findUser[$message[1]]] - $findUser[$message[1]]]
$addField[1;Moderador;
$userTag - $authorID]
$thumbnail[1;$userAvatar[$findUser[$message[1]]]]
$unban[$findUser[$message[1]];$guildID;$userTag: $replaceText[$replaceText[$checkCondition[$messageSlice[1]==];true;No se proporcionó una razón];false;$messageSlice[1]]]
$ban[$findUser[$message[1]];$guildID;7;$userTag: $replaceText[$replaceText[$checkCondition[$messageSlice[1]==];true;No se proporcionó una razón];false;$messageSlice[1]]]
$if[$memberExists[$findUser[$message[1]]]==true]
$onlyIf[$rolePosition[$highestRole[$findUser[$message[1]]]]>$rolePosition[$highestRole];⛔ - Para usar esto, debe tener un rango más alto que el usuario mencionado]
$onlyIf[$findUser[$message[1]]!=$authorID;⛔ - No puedes banearte a ti mismo (o de lo contrario, no pude encontrar a ese usuario) ]
$onlyIf[$findUser[$message[1]]!=$clientID;⛔ - No puedo banearme a mí mismo, eso es ilegal]

$onlyIf[$findUser[$message[1]]!=$ownerID;⛔ - No puedo banear al dueño del servidor ]
$elseIf[$memberExists[$findUser[$message[1]]]==false]
$onlyIf[$findUser[$message[1]]!=$authorID;⛔ - No puedes banearte a ti mismo (o de lo contrario, no pude encontrar a ese usuario)]
$endelseIf
$endif
$onlyIf[$message!=;⛔ - Especifique el usuario que desea banear. Uso Correcto:  \`$getServerVar[prefix]ban <@User> [Reason\\]\`]
$onlyPerms[ban;⛔ -Para usar esto, necesita el permiso \`BAN_MEMBERS\`]
 $onlyBotPerms[ban;⛔ - No tengo suficientes permisos para ejecutar este comando. Faltan permisos: \`BAN_MEMBERS\`]
$cooldown[8s;]

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