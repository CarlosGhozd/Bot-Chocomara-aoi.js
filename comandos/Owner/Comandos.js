module.exports = ({
    name: "comandos",
    code: `
    $description[1;Aca te dejo la cantidad de comandos y comandos elminados:]
    $addButton[1;Se eliminaron: $replaceText[$replaceText[$checkContains[$math[$get[oldcount]-$get[newcount]];-];true;0];false;$math[$get[oldcount]-$get[newcount]]];danger;removed;yes;]
$addButton[1;Se añadieron: $replaceText[$replaceText[$checkContains[$math[$get[newcount]-$get[oldcount]];-];true;0];false;$math[$get[newcount]-$get[oldcount]]];success;added;yes]
$addButton[1;Se actualizaron: $get[newcount];primary;updated;yes]
$let[newcount;$commandsCount]
$let[oldcount;$commandsCount]
$color[1;BLUE]
    `
})