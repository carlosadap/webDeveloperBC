var circles = [];

function onKeyDown(event) {
  if (data[event.key]) {
    var maxPoint = new Point(view.size.width, view.size.height);
    var randomPoint = Point.random();
    var point = maxPoint * randomPoint;
    var newCircle = new Path.Circle(point, 500);
    newCircle.fillColor = data[event.key].color
    data[event.key].sound.play()
    circles.push(newCircle);
  }
}

function onFrame(event) {
  for (var i = 0; i< circles.length; i++) {
    circles[i].fillColor.hue += 1;
    circles[i].scale(.9);
  }
}
