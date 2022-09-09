module.exports = {
    name: "avatar-bot",
    code: `

$author[1;Avatar Actualizado;$userAvatar[901158845278191616]]
$color[1;D3FFDF]
$description[1;**$username** El Avatar ha sido actualizado con éxito]
$image[1;$message]
$setBotAvatar[$message]

$onlyIf[$isValidLink[$message]==true;**$username** Has proporcionado un enlace de imagen **no válido**]
$onlyForIds[901158845278191616;]

`
}

/*
╔═════════════════════════════════════════════════════╗
║|| - || Desarrollado por Carlos Ghozd#2653 || - ||   ║
║   ----------| discord.io/chocomara |----------      ║
╚═════════════════════════════════════════════════════╝
*/