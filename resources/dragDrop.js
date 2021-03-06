function allowDrop(ev) {
  ev.preventDefault();
}

function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text");
  var id = document.getElementById("steamModDrop").innerHTML;
  var text = document.getElementById(id).innerHTML;
  var colour = prompt("Please enter a colour (green, yellow, red)");
  var valid = false;
  switch (colour) {
  case "Green":
    colour = "rgba(0, 255, 0, 0.2)";
    valid = true;
    break;
  case "Yellow":
    colour = "rgba(255, 255, 0, 0.2)";
    valid = true;
    break;
  case "Red":
    colour = "rgba(255, 0, 0, 0.2)";
    valid = true;
    break;
  default:
    valid = false;
    break;
  }

  if (valid) {
    document.getElementById("#steamModDropButton").innerHTML = text + "," + colour;
    document.getElementById("#steamModDropButton").click();
  } else {
    alert("Invalid Colour!");
  }
}
