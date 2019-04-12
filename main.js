function edit(){
	editor.document.designMode = "On";
}
function bold(){
	editor.document.execCommand("bold", false, null);
}
function italic(){
	editor.document.execCommand("italic", false, null);
}
function underline(){
	editor.document.execCommand("underline", false, null);
}
function subscript(){
	editor.document.execCommand("subscript", false, null);
}
function superscript(){
	editor.document.execCommand("superscript", false, null);
}
function undo(){
	editor.document.execCommand("undo");
}
function redo(){
	editor.document.execCommand("redo");
}
