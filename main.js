function edit(){
	editor.document.designMode = "On";
}
function cmd(cmd){
	editor.document.execCommand(cmd, false, null);
}
function cmdWithArg(command, arg){
	editor.document.execCommand(command, false, arg);
}
function newFile(){
	let c = confirm("The changes cannot be saved,are you sure to continue?")
	if(c==true){
		location.reload();
	}
}
