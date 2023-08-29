const left = require("../movement/left").left;

test("changes direction to the left when current direction is North", () => {
  const Direction = "N";
  expect(left(Direction)).toStrictEqual("W");
});

test("changes direction to the left when current direction is South", () => {
    const Direction = "S";
    expect(left(Direction)).toStrictEqual("E");
  });

  test("changes direction to the left when current direction is East", () => {
    const Direction = "E";
    expect(left(Direction)).toStrictEqual("N");
  });

  test("changes direction to the left when current direction is West", () => {
    const Direction = "W";
    expect(left(Direction)).toStrictEqual("S");
  });

  test("changes direction to the left when current direction is Up", () => {
    const Direction = "U";
    expect(left(Direction)).toStrictEqual("W");
  });

  test("changes direction to the left when current direction is Down", () => {
    const Direction = "D";
    expect(left(Direction)).toStrictEqual("E");
  });