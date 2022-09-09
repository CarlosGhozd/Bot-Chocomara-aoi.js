module.exports = ({
    name: "set-prefix",
    code: `
$setServerVar[prefix;$message]
$author[1;Custom Prefix!;https://cdn.discordapp.com/attachments/795965782944120862/798540261353193472/6286_tada_animated.gif]
$description[1;Okay, Mi nuevo prefijo en este servidor es \`$message\`, ¡Ahora Usa! \`$messagehelp\`]
$footer[1;Prefix cambiado por @$username]
$color[1;RANDOM]    
$addTimestamp[1]
$argsCheck[1;Use: \`$getServerVar[prefix]setprefix <NuevoPrefix>\`]

$onlyIf[$getGlobalUserVar[Premium]==true;❌ Usted no esta agregado al sistema Premium]

$onlyIf[$charCount[$message]<4;Upps tal vez no sabias pero el limite de caracteres para el nuevo prefix es maximo 4]
$onlyPerms[admin;Al parecer no tienes permisos suficientes para hacer esto]`
})