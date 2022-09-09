module.exports = {
    name: "8ball",
    code: `
 $onlyIf[$message!=;**<@$authorID> Necesitas hacer una pregunta....**]
$title[1;:8ball: Pregunta 8ball]
$color[1;RANDOM]
$description[1;
**$username Pregunta:**
\`$message\`
**Repuesta :**
$randomText[\`Sí \` ;  \`No\` ;\`No estoy seguro\` ; \`Lo sabes\` ; \`Absolutamente no\` ;\`Absolutamente sí\` ; \`No puedo decirlo\`; \`Seguro\`; \`Mmm\`,No tengo ni idea\`;\` Jaja yes boi\`; \`¿Qué? ¡Claro que no!\` ;\` Si\`; \`No\` ;\`Quizás\` ;\`Tengo demasiado miedo de decirlo\` ;\`Lo siento, es demasiado difícil de responder.\` ;\`Más probable.\` ]]
$cooldown[10s; **<@$authorID> ¡Espere** \`%time%\` **Para hacer otra Pregunta Al Bot :)**]

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