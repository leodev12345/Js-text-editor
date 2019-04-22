let isInEditMode = true;
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
function link(){
	let link = prompt("Enter URL:");
	editor.document.execCommand("createLink",false,link);
}
function image(){
	let img = prompt("Enter image URL:");
	editor.document.execCommand("insertImage",false,img);
}
function editMode(){
	if(isInEditMode){
		editor.document.designMode = "Off";
		isInEditMode = false;
	}
	else{
		editor.document.designMode = "On";
		isInEditMode = true;
	}
}
