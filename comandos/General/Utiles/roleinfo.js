module.exports = {
    name: "roleinfo",
    code: `$title[1;$roleName[$findRole[$message]] Info]
 
$description[1;
**Nombre:** <@&$findRole[$message]>
 
**Color:** \`$getRoleColor[$findRole[$message]]\`
 
**Fecha de Creacion:** \`$creationDate[$findRole[$message];date]\`
 
**Usted tiene este rol?** \`$toLocaleUppercase[$hasRoles[$guildID;$authorID;$findRole[$message]]\`
 
**Usuarios con este rol:** \`$djsEval[message.guild.roles.cache.get('$findRole[$message]').members.map(m=>m.id).length;yes]\`

**Posicion:** \`$rolePosition[$findRole[$message]]/$roleCount\`

**Permisos:** \`$rolePerms[$findRole[$message]; | ]\`]
$argsCheck[1;{newEmbed: {title:Uso incorecto}{description:**Uso Corecto:**
 
$getServerVar[prefix]roleinfo <mention/ID>}
{color:FF0000}}]
$color[1;#FFD8F0]

$onlyIf[$getGlobalUserVar[blacklist]==false;{newEmbed:{title:Acceso Denegado!}
{description:> El usuario $userTag[$authorID] esta dentro de la blacklist de $userTag[$clientID] 
> Razon: **$getglobaluservar[rblacklist]**}
{color:ff0000}
{field:Que Puedo Hacer?:Lo que puedes hacer, es entrar al [Servidor de Soporte](https://discord.com/invite/dGB9fJ3azu) y discutir con $userTag[$botOwnerID] y saber el motivo de Baneo:yes}}]`
}

/*
╔═════════════════════════════════════════════════════╗
║|| - || Desarrollado por Carlos Ghozd#2653 || - ||   ║
║   ----------| discord.io/chocomara |----------      ║
╚═════════════════════════════════════════════════════╝
*/