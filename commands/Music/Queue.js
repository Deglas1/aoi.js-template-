module.exports = ({
name: "queue",
type: "interaction",
prototype: "slash",
code: `$interactionReply[;{newEmbed:{title: Список треков в очереди}{description:$queue[1;15]}{footer:Тут могут быть показаны только первые 15 треков в очереди}}]
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
