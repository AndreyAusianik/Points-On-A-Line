module.exports = function isPointsOnLine(points) {
  points = points.slice();
  const [[x1, y1], [x2, y2]] = points.splice(0, 2);
  const a = (y2 - y1) / (x2 - x1);
  const b = y1 - a * x1;
  return points.every(([x, y]) => isFinite(a) ? a * x + b == y : x === x1);
}
