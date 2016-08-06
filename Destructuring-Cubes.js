/*jshint esversion: 6 */

let Square = {
  l : 5,
  w : 5
};

function Cube({ l, w, h = 5 }) {
    return l * w * h;
}

console.log(Cube(Square));

// 125 __³
