const command = require("../movement/command").command;


test("for the only one command", () => {
    const commands = ["b","b"];
  
    const start = {
      coordinates: [0, 0, 0],
      direction: "N",
    };
  
    const expected = {
      coordinates: [0, -2, 0],
      direction: "N",
    };
  
    const output = command(commands, start);
    expect(output).toStrictEqual(expected);
  
  });

  test("for multiple commands", () => {
    const commands = ["f", "f", "f", "f", "f"];
  
    const start = {
      coordinates: [5, -2, 1],
      direction: "E",
    };
    const expected = {
      coordinates: [10, -2, 1],
      direction: "E",
    };
  
    const output = command(commands, start);
    expect(output).toStrictEqual(expected);
    
  });

  test("for multiple commands", () => {
    const commands = ["r","r","r"];
  
    const start = {
      coordinates: [1, 1, 1],
      direction: "N",
    };
    
    const expected = {
      coordinates: [1,1,1],
      direction: "W",
    };
  
    const output = command(commands, start);
    expect(output).toStrictEqual(expected);
    
  });

  test("for multiple commands", () => {
    const commands = ["f", "r", "b", "b", "l"];
  
    const start = {
      coordinates: [0, 0, 0],
      direction: "N",
    };
    const expected = {
      coordinates: [-2, 1, 0],
      direction: "N",
    };
  
    const output = command(commands, start);
    expect(output).toStrictEqual(expected);
    
  });