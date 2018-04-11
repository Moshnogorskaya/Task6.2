function isBishopMoveValid(start, end) {
// Calculate x and y coordinates of the positions on the board
var x1 = start[0].charCodeAt() - 96;
var y1 = +start[1];
var x2 = end[0].charCodeAt() - 96;
var y2 = +end[1];
/* There are 2 lines going through each position,
   if at least one of the lines is common for start and end positions,
   then the move is valid.
   
   Each line can be described with math expression y=ax+b.
   We should calculate coefficients to get the line.
   
   The difference between 2 lines is a: a1=1 for first and a1=-1 for second.
   b, also represented as the shift on y-axe, can be calculated like b=y-ax.
   So we get two lines for start position: 
   b=y-x for a=1
   b=y+x for a=-1
   And repeat the same calculation to get lines going through end position.
   */
  var startShift1 = y1 - x1; 
  var startShift2 = y1 + x1;
  var endShift1 = y2 - x2;
  var endShift2 = y2 + x2;
//compare lines and return results
  return (
    startShift1 == endShift1 ||
    startShift2 == endShift2
  );
}

console.log(isBishopMoveValid("g3", "c7"));