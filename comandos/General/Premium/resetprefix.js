module.exports = ({
    name: "reset-prefix",
    code: `
$resetServerVar[prefix]
$title[1;Custom Prefix]
$description[1;
Prefix receteado ahora sera \`$getServerVar[prefix]\`]
$color[1;RANDOM]
$onlyIf[$getGlobalUserVar[Premium]==true;❌ Usted no esta agregado al sistema Premium]
$onlyPerms[admin;No tienes permisos suficientes]
`
})

/*
╔═════════════════════════════════════════════════════╗
║|| - || Desarrollado por Carlos Ghozd#2653 || - ||   ║
║   ----------| discord.io/chocomara |----------      ║
╚═════════════════════════════════════════════════════╝
*/