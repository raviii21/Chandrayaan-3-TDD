const forward = require("./forward").forward;
const backward = require("./backward").backward;
const left = require("./left").left;
const right = require("./right").right;

function command(commands, start){
  let direction = start.direction;
  let coordinates = start.coordinates;

  for(let i = 0; i < commands.length; i++){
      let c=commands[i];

      if(c === "f") {
        coordinates = forward(coordinates, direction);
        console.log(coordinates, direction);
      } 
      else if (c === "b") {
        coordinates = backward(coordinates, direction);
        console.log(coordinates, direction);
      }
      else if (c === "l") {
        direction = left(direction);
        console.log(coordinates, direction);
      }
      else if (c === "r") {
        direction = right(direction);
        console.log(coordinates, direction);
      } 
      else {
        console.log("Invalid command");
      }
  }

  console.log("Final Position : " + coordinates, direction);
  return {coordinates,direction};
}

module.exports = {
    command,
};