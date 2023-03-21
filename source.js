module.exports = mapPIP

function pointOnVertex(polygon, point) {
  for (var _i = 0, vertices_1 = polygon; _i < vertices_1.length; _i++) {
    var vertex = vertices_1[_i];
    if (point[0] == vertex[0] && point[1] == vertex[1]) {
        return true;
    }
  }
  return false;
}

function mapPIP(polygon, point) {
  
  if (pointOnVertex(polygon, point)) {
    return 'vertex';
  }
  var intersections = 0;
  for (var i = 1; i < polygon.length; i++) {
      var vertex1 = polygon[i - 1];
      var vertex2 = polygon[i];
      if (vertex1[1] == vertex2[1] && vertex1[1] == point[1] && point[0] > Math.min(vertex1[0], vertex2[0]) && point[0] < Math.max(vertex1[0], vertex2[0])) {
          return 'edge';
      }
      if (point[1] > Math.min(vertex1[1], vertex2[1]) && point[1] <= Math.max(vertex1[1], vertex2[1]) && point[0] <= Math.max(vertex1[0], vertex2[0]) && vertex1[1] != vertex2[1]) {
          var xinters = (point[1] - vertex1[1]) * (vertex2[0] - vertex1[0]) / (vertex2[1] - vertex1[1]) + vertex1[0];
          if (xinters == point[0]) {
              return 'edge';
          }
          if (vertex1[0] == vertex2[0] || point[0] <= xinters) {
              intersections++;
          }
      }
  }
  if (intersections % 2 != 0) {
      return 'inside';
  }
  else {
      return 'outside';
  }
}