const up = require("../movement/up").up;

test("changes direction to the Up when current direction is North/South/East/West", () => {
    expect(up("N")).toStrictEqual("U");
    expect(up("S")).toStrictEqual("U");
    expect(up("E")).toStrictEqual("U");
    expect(up("W")).toStrictEqual("U");
});

test("changes direction to the Up when current direction is Up", () => {
    const Direction = "U";
    expect(up(Direction)).toStrictEqual("D");
    // expect(turnUp(Direction)).toStrictEqual("N");
  });

  test("changes direction to the Up when current direction is Down", () => {
    const Direction = "D";
    expect(up(Direction)).toStrictEqual("S");
  });