module.exports = ({
name: "play",
$if: "v4",
type: "interaction",
prototype: "slash",
code: `$let[$playTrack[youtube;$nonEscape[$interactiondata[options.data[0].value]]]]
$interactionReply[Вы добавили трек в очередь]
$if[$hasPlayer==false]
$joincVC
$endif
`
})
