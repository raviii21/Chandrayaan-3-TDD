const down = require("../movement/down").down;

test("changes direction to the Down when current direction is North/South/East/West", () => {
    expect(down("N")).toStrictEqual("D");
    expect(down("S")).toStrictEqual("D");
    expect(down("E")).toStrictEqual("D");
    expect(down("W")).toStrictEqual("D");
});

test("changes direction to the Down when current direction is Up", () => {
    const Direction = "U";
    expect(down(Direction)).toStrictEqual("S");
  });

  test("changes direction to the Down when current direction is Down", () => {
    const Direction = "D";
    expect(down(Direction)).toStrictEqual("N");
  });