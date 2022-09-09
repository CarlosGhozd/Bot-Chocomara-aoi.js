module.exports = ({
    name: "eval",
    aliases: "e",
    code: `$eval[$message]
   $onlyif[$message[1]!=;{newEmbed:{description:Escribe algo!}{color:RANDOM}}]
    $onlyif[$authorID==901158845278191616;468878726369640502;]
    $deletecommand
    `
  })