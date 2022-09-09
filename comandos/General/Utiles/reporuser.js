module.exports = {
    name: "report-user",
    code: `$usechannel[1004860570073321512]
  $title[1;Reporte!]
  $color[1;FFFAD3]
  $addfield[1;Del servidor;$guild[$guildID;name];yes]
  $addField[1;Razón;$nomentionmessage;yes]
  $addField[1;Usuario Reportado;$userTag[$mentioned[1]] | $mentioned[1]]

  $addField[1;Usuario;$usertag[$authorID] | $authorID;yes]
  $deletecommand

$channelSendMessage[$channelID;<@$authorID> {newEmbed: {title:Reporte de usuario Entragado} {thumbnail:$serverIcon} {description:Reporte enviado, gracias por el reporte esto nos ayuda a mejorar la calidad de Natsumi!} {footer:Gracias por reportar este usuario} {color:FFD3D3}}] 
$onlyIf[$nomentionmessage!=;Escribe la razón del reporte!]
$onlyIf[$authorID!=$mentioned[1];Por que quieres reportarte a ti mismo?]
$onlyIf[$userExists[$mentioned[1]]==true;Menciona al usuario que quieres reportar]

`
}