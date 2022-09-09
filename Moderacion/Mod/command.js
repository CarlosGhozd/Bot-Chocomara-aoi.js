module.exports = ({
    name: "command",
    aliases: ['cmd'],
    description: "información sobre un comando específico",
    usage: "command <nombre del comando>",
    cooldown: '3s',
    code: `
$author[1;$toLocaleUppercase[$commandInfo[$message[1];name]] Comando;$userAvatar[$clientID];https://discord.com/oauth2/authorize?client_id=885316406307082270&permissions=8&scope=bot]
$cooldown[$commandInfo[command;cooldown];{newEmbed:{description::c_s: ¡Espera %time% para volver a intentarlo!}{color:RED}}]
$color[1;RANDOM]

$description[1;**Alias:**
- $toLocaleUpperCase[$replaceText[$replaceText[$checkCondition[$commandInfo[$message[1];aliases]!=];true;$replaceText[$commandInfo[$message[1];aliases];,; | ]];false;Ninguno]]

**Descripcion:**
- $replaceText[$replaceText[$checkCondition[$commandInfo[$message[1];description]!=];true;$commandInfo[$message[1];description]];false;Ninguna]

**Uso:**
- $replaceText[$replaceText[$checkCondition[$commandInfo[$message[1];usage]!=];true;$commandInfo[$message[1];usage]];false;Ninguno]

**Cooldown:**
- $toLocaleUpperCase[$replaceText[$replaceText[$checkCondition[$commandInfo[$message[1];cooldown]!=];true;$commandInfo[$message[1];cooldown]];false;None]]]

$footer[1;<> = Requerido | () = Opcional;$authorAvatar]
 $onlyIf[$commandInfo[$message[1];name]!=;{newEmbed:{description: <:no:943369554158043156> Comando no encontrado}{color:#ff0000}}]
 $onlyIf[$message!=;{newEmbed:{description: Uso de argumentos no válidos:
\`$getServerVar[prefix]cmd <nombre del comando>\`}{color:#ff0000}}]`
});

/*
╔═════════════════════════════════════════════════════╗
║|| - || Desarrollado por Carlos Ghozd#2653 || - ||   ║
║   ----------| discord.io/chocomara |----------      ║
╚═════════════════════════════════════════════════════╝
*/