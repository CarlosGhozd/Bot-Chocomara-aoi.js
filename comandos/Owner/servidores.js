module.exports = ({
    name: "server_name",
    alias: "sv-name",
    description: "Muestra los nombres de los servidores que esta.",
    code: `  
  $title[1;Nombres de los servidores q estoy!]
  $description[1;•$serverNames
  
  *Estoy en $serverCount servidores!*]
  $color[1;GREEN]
   $thumbnail[1;$serverIcon]
  $footer[1;$username; $authorAvatar]
    $onlyif[$authorID==901158845278191616;]
  $addTimestamp[1]
  `
})