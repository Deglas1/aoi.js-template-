module.exports = ({
name: "create-slash",
code: `
$createApplicationCommand[$guildid;play;Добавить трек в очередь;true;slash;{"name": "track", "description": "название трека", "type": 3, "required": true}]
$createApplicationCommand[$guildid;skip; Пропустить трек;true;slash]
$createApplicationCommand[$quildid;queue;Список очереди треков;true;slash]
`
})
