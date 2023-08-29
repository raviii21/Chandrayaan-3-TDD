const right = require("../movement/right").right;

test("changes direction to the right when current direction is North", () => {
  const Direction = "N";
  expect(right(Direction)).toStrictEqual("E");
});

test("changes direction to the right when current direction is South", () => {
    const Direction = "S";
    expect(right(Direction)).toStrictEqual("W");
  });

  test("changes direction to the right when current direction is East", () => {
    const Direction = "E";
    expect(right(Direction)).toStrictEqual("S");
  });

  test("changes direction to the right when current direction is West", () => {
    const Direction = "W";
    expect(right(Direction)).toStrictEqual("N");
  });

  test("changes direction to the right when current direction is Up", () => {
    const Direction = "U";
    expect(right(Direction)).toStrictEqual("E");
  });

  test("changes direction to the right when current direction is Down", () => {
    const Direction = "D";
    expect(right(Direction)).toStrictEqual("W");
  });