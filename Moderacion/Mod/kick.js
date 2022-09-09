module.exports = {
    name: "kick",
    if: "v4",
    code: ` $setUserVar[kickmessage;$noMentionMessage;$findMember[$mentioned[1];$guildID] $channelSendMessage[$getServerVar[logchannel];{newEmbed:{description:kick | case }{field:Offender:$userTag[$mentioned[1]] <@$mentioned[1]>}{field:Razón: $getServerVar[kickmessage]}{field:Moderador responsable: $userTag}{color:BLUE}{footer:ID#COLON# $mentioned[1]}{timestamp}] $if[$getServerVar[logchannel]==;]] $endif $kick[$mentioned[1];$guildID;0;$if[$noMentionMessage==;No se proporcionó una razón;$noMentionMessage]]
 $title[1;Usuario Expulsado]
 $description[1;<@$authorID> kicked <@$mentioned[1]>
 Reason: $if[$noMentionMessage==;No se proporcionó una razón;$noMentionMessage]
 $color[1;RED]
 $onlyIf[$rolePosition[$highestRole[$authorID]]<$rolePosition[$highestRole[$mentioned[1]]];No puedes kickear a alguien con un rango más alto que tú. ]
 $onlyIf[$highestRole[$mentioned[1]]!=$highestRole[$authorID];No puedes kickar a alguien con el mismo rango más alto]
 $onlyIf[$rolePosition[$highestRole[$clientID]]<$rolePosition[$highestRole[$mentioned[1]]];No puedo kickear a alguien con un rango más alto que yo.]
 $onlyIf[$highestRole[$mentioned[1]]!=$highestRole[$clientID];No puedo kickear a alguien con el mismo rol más alto que el mío. ]
 $onlyIf[$mentioned[1]!=$ownerID;No puedes kickear al dueño del servido]
 $onlyIf[$mentioned[1]!=$authorID;Estoy segura de que no quieres hacer eso]
 $onlyIf[$mentioned[1]!=$clientID;no puedo kickearme]
 $onlyIf[$isMentioned[$mentioned[1]]==true;Tienes que mencionar a alguien a quien quieras que expulse ]
 $onlyIf[$hasPerms[$guildID;$authorID;kick]==true;No tienes permisos de \`KICK\`] 
 $onlyBotPerms[kick;No tengo permisos de \`KICK\`] $suppressErrors

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