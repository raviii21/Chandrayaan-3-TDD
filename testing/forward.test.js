const forward = require("../movement/forward").forward;

test("moves forward when current direction is  North", () => {
  let Direction = "N";
  let position = [0, 0, 0];
  Position = forward(position, Direction);
  expect(Position).toStrictEqual([0, 1, 0]);
});

test("moves forward when current direction is  South", () => {
  let Direction = "S";
  let position = [0, 0, 0];
  Position = forward(position, Direction);
  expect(Position).toStrictEqual([0, -1, 0]);
});

test("moves forward when current direction is  East", () => {
  let Direction = "E";
  let position = [0, 0, 0];
  Position = forward(position, Direction);
  expect(Position).toStrictEqual([1, 0, 0]);
});

test("moves forward when current direction is  West", () => {
  let Direction = "W";
  let position = [0, 0, 0];
  Position = forward(position, Direction);
  expect(Position).toStrictEqual([-1, 0, 0]);
});

test("moves forward when current direction is  Up", () => {
  let Direction = "U";
  let position = [0, 0, 0];
  Position = forward(position, Direction);
  expect(Position).toStrictEqual([0, 0, 1]);
});

test("moves forward when current direction is  Down", () => {
  let Direction = "D";
  let position = [0, 0, 0];
  Position = forward(position, Direction);
  expect(Position).toStrictEqual([0, 0, -1]);
});