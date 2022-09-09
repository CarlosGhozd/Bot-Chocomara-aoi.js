module.exports = {
    name: "check",
    code: `$author[1;😎 | Chequeo;$useravatar[$finduser[$message]]]
$addField[1;> Razon:;$replacetext[$replacetext[$checkcondition[$getglobaluservar[rblacklist;$finduser[$message]]==];true;Ya te dije que ese usuario no esta en la blacklist >:c];false;$getglobaluservar[rblacklist;$finduser[$message]]]]
$addField[1;> Estas en la blacklist?;$replacetext[$replacetext[$checkcondition[$getglobaluservar[blacklist;$finduser[$message]]==false];true;No];false;Si]]`
}