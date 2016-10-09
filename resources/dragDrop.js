function allowDrop(ev) {
  ev.preventDefault();
}

function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text");
  var id = $("steamModDrop").text();
  alert(id);
            var text = $(id).text();
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
                $("#steamModDropButton").html(text + "," + colour).click();
            } else {
                alert("Invalid Colour!");
            }
}
