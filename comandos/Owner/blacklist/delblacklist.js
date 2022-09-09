module.exports = ({
    name: "delete-black-list",
    aliases: "dbl",
    code: `$setvar[numblacklist;$sub[$getVar[numblacklist];1]]
$setvar[lastunblacklist;$finduser[$message[1]]]

$setGlobalUserVar[rblacklist;;$finduser[$message[1]]]

$setGlobalUserVar[blacklist;false;$finduser[$message[1]]]

$author[1;❌ | Usuario sacado de la blacklist;$useravatar[$finduser[$message[1]]]]
$description[1;El usuario $usertag[$finduser[$message[1]]] fue removido de la blacklist]
$color[1;RANDOM]
$onlyif[$getglobaluservar[blacklist;$findUser[$message[1]]]==true;Este usuario no esta blacklisteado!]
$onlyForIDs[$botOwnerID;no eres competente de hacer esto >:c]
$onlyIF[$message!=;pon el id, mencion o nombre#tag del usuario a desbanear del bot!]`
})