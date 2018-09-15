/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  var triangleCounter = 0;
  for(var i = 0; i < preferences.length; i++) {
    var firstLover = i+1;               // First Spichonee
    var l1 = preferences[firstLover-1]; // First Spichonee loves Second Spichonee
    var secondLover = l1;                // Second Spichonee
    var l2 = preferences[secondLover-1]; // Second Spichonee loves Third Spichonee
    var thirdLover = l2;                // Third Spichonee
    var l3 = preferences[thirdLover-1]; // Third Spichonee loves First Spichonee

    if((firstLover != l1) && (l3 == firstLover)) {
      triangleCounter ++;
    }
  }

  return triangleCounter/3;
};
