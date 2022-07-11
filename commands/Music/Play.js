module.exports = ({
name: "play",
$if: "v4",
type: "interaction",
prototype: "slash",
code: `$interactionReply[Вы добавили трек $songinfo[title] в очередь]
$let[$playTrack[youtube;$nonEscape[$interactiondata[options.data[0].value]]]]
$if[$hasPlayer==false]
$joincVC
$endif
`
})
