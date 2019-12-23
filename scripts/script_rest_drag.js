
function dragElement(elmnt) {
  if(elmnt == 'modal-drag-move'){
    var modal = document.getElementById('modal-move');
  } else {
    var modal = document.getElementById('modal-rest');
  }
  var pos1 = 0,
  pos2 = 0,
  pos3 = 0,
  pos4 = 0;
  elmnt.onmousedown = dragMouseDown;
  
  
  function dragMouseDown(e) {
    console.log(elmnt);
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    modal.style.top = (modal.offsetTop - pos2) + "px";
    modal.style.left = (modal.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
    // elmnt = none;
  }
}
