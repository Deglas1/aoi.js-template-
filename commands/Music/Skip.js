module.exports = ({
name: "skip",
type: "interaction",
prototype: "slash",
code: `$skip
$interactionReply[Вы успешно пропустили трек]
$onlyif[$queuelength>=1;{
"content": "Сейчас в очереди нет треков", 
"ephemeral": true,
"options": { "interaction": true }
}]
$onlyif[$voiceid[$clientid]!=;{
"content": "Я не в ГС", 
"ephemeral": true,
"options": { "interaction": true }
}]
$onlyif[$voiceid!=;{
"content": "Вы не в ГС", 
"ephemeral": true,
"options": { "interaction": true }
}]
`
})
