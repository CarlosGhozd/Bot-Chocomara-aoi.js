module.exports = [{
    name: "add-premium",
    code: `$setGlobalUserVar[Premium;true;$mentioned[1]]

$description[1;Felicidades $userTag[$mentioned[1]], te añadieron al sistema premium!]
$color[1;D3FFE2]
$thumbnail[1;$serverIcon]
$addTimestamp[1]
$thumbnail[1;$authorAvatar;$username]
$image[1;https://img.wattpad.com/635e5a01a872d38558d9a3bed17848af4e2a8374/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f776174747061642d6d656469612d736572766963652f53746f7279496d6167652f4a4e614c2d664c6244765a3869673d3d2d3830322e313566633861386138313732343265613135373036353133343630312e676966]

$onlyIf[$getGlobalUserVar[Premium;$mentioned[1]]==false;El ya esta en el sistema premium!]
$onlyIf[$authorID==901158845278191616;Solo mi idolo $userTag[901158845278191616] puede usar esto!]

$channelSendMessage[1004860766014414981;{newEmbed:{title:Felicidades!}{description:Felicidades $userTag[$mentioned[1]], haz sido añadido al sistema premium!

Tiempo: }{color:GREEN}{image:https://img.wattpad.com/635e5a01a872d38558d9a3bed17848af4e2a8374/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f776174747061642d6d656469612d736572766963652f53746f7279496d6167652f4a4e614c2d664c6244765a3869673d3d2d3830322e313566633861386138313732343265613135373036353133343630312e676966}}]
`
}, {
    name: "remove-premium",
    code: `$setGlobalUserVar[Premium;false;$mentioned[1]]
  
$description[1;Lo siento $userTag[$mentioned[1]], te sacaron del sistema premium....]
$color[1;D3FFE2]
$thumbnail[1;$serverIcon]
$addTimestamp[1]
$thumbnail[1;$authorAvatar;$username]
$image[1;https://img.wattpad.com/635e5a01a872d38558d9a3bed17848af4e2a8374/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f776174747061642d6d656469612d736572766963652f53746f7279496d6167652f4a4e614c2d664c6244765a3869673d3d2d3830322e313566633861386138313732343265613135373036353133343630312e676966]

$onlyIf[$getGlobalUserVar[Premium;$mentioned[1]]==true;El no esta en el sistema premium!]
$onlyIf[$authorID==901158845278191616;Solo mi idolo $userTag[901158845278191616] puede usar esto!]

$channelSendMessage[1004860719663161485;{newEmbed:{title:Lo Siento!}{description:Lo siento $userTag[$mentioned[1]], te sacaron del sistema premium.}{color:RED}{image:https://img.wattpad.com/635e5a01a872d38558d9a3bed17848af4e2a8374/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f776174747061642d6d656469612d736572766963652f53746f7279496d6167652f4a4e614c2d664c6244765a3869673d3d2d3830322e313566633861386138313732343265613135373036353133343630312e676966}}]


`
}]