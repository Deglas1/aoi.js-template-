module.exports = ({
name: "play",
type: "interaction",
prototype: "slash",
code: `$let[$playTrack[youtube;$nonEscape[$interactiondata[options.data[0].value]]]]
