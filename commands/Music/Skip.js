module.exports = ({
name: "skip",
type: "interaction",
prototype: "slash",
code: `$skip
$interactionReply[Вы успешно пропустили трек]
$onlyif[$queuelength
