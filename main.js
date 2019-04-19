function edit(){
	editor.document.designMode = "On";
}
function cmd(cmd){
	editor.document.execCommand(cmd, false, null);
}
