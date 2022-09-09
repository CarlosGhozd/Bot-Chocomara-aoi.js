module.exports = [{
    name: "afk",
    $if: "v4",
    code: `$if[$rolePosition[$highestRole]>$rolePosition[$highestRole[$clientID]]]
    $if[$hasPerms[$guildID;$clientID;managenicknames]==true]
    $if[$authorID!=$ownerID]
    $if[$nickname!=]
    $changeNickname[$authorID;AFK | $nickname;Usuario en Afk]
    $else
    $changeNickname[$authorID;AFK | $username;User en afk]
    $endif
    $endif
    $endif
    $endif
    $author[1;AFK;$authoravatar]
    $description[1;<@$authorID> ahora está afk. \n Razon: $getUserVar[afkr]]
    $color[1;RANDOM]
    $setUserVar[afk;true]
    $wait[1ms]
    $setUserVar[afkr;$message]
    $onlyif[$getUserVar[afk]!=true;]
$footer[1; $serverName $addTimestamp[1]]
$onlyIf[$getGlobalUserVar[blacklist]==false;{newEmbed:{title:Acceso Denegado!}
{description:> El usuario $userTag[$authorID] esta dentro de la blacklist de $userTag[$clientID] 
> Razon: **$getglobaluservar[rblacklist]**}
{color:ff0000}
{field:Que Puedo Hacer?:Lo que puedes hacer, es entrar al [Servidor de Soporte](https://discord.gg/dGB9fJ3azu) y discutir con $userTag[$botOwnerID] y saber el motivo de Baneo:yes}}]
`
}, {
    name: "$alwaysExecute",
    $if: "v4",
    code: `$if[$getUserVar[afk]==true;]
    $if[$rolePosition[$highestRole]>$rolePosition[$highestRole[$clientID]]]
    $if[$hasPerms[$guildID;$clientID;managenicknames]==true]
    $if[$authorID!=$ownerID]
    $changeNickname[$authorID;$replaceText[$nickname;AFK | ;;1];Usuario en Afk ]
    $endif
    $endif
    $endif
    $setUserVar[afkr;]
    $setUserVar[afk;false]
    Bienvenido al chat de nuevo <@$authorID>
    $elseif[$mentioned[1;yes]!=$authorID]
    $if[$getUserVar[afk;$mentioned[1]]==true]
    $username[$mentioned[1]] está en afk razón: $getUserVar[afkr;$mentioned[1]]
    $endif
    $endelseif
    $endif
    $wait[1ms]
    `
}]

/*
╔═════════════════════════════════════════════════════╗
║|| - || Desarrollado por Carlos Ghozd#2653 || - ||   ║
║   ----------| discord.io/chocomara |----------      ║
╚═════════════════════════════════════════════════════╝
*/