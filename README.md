Jud whether a point on a map is in a polygon for fireCode.

Install:
npm install map-pip

eg:
var mapPIP = require("map-pip")
var polygon = [ [ 121.47, 31.23 ], [ 161.47, 31.23 ], [ 141.47, 51.23 ] ]

console.log( mapPIP(polygon, [ 141.47, 41.23 ]) )
Output: 'inside'

map：{
  0: 'inside',
  1: 'outside',
  2: 'edge',
  3: 'vertex',
}

