const sequenceGenerator = require(".")

describe("sequence", () => {
  it("works", () => {
    const s = sequenceGenerator({
      exerciseSeconds: 10,
      exerciseRestSeconds: 3,
      rounds: 3,
      roundRestSeconds: 5,
      exercises: "foo\n   bar\n baz   ",
    })

    expect(s.next().value).toEqual({ exercise: "foo" })
    expect(s.next().value).toEqual({ exercise: "bar" })
    expect(s.next().value).toEqual({ exercise: "baz" })
    expect(s.next().done).toEqual(true)

    // expect(s.next().value).toEqual({ exercise: "foo", secondsRemaining: 10 })
    // expect(s.next().value).toEqual({ exercise: "foo", secondsRemaining: 9 })
    // expect(s.next().value).toEqual({ exercise: "foo", secondsRemaining: 8 })
    // expect(s.next().value).toEqual({ exercise: "foo", secondsRemaining: 7 })
    // expect(s.next().value).toEqual({ exercise: "foo", secondsRemaining: 6 })
    // expect(s.next().value).toEqual({ exercise: "foo", secondsRemaining: 5 })
    // expect(s.next().value).toEqual({ exercise: "foo", secondsRemaining: 4 })
    // expect(s.next().value).toEqual({ exercise: "foo", secondsRemaining: 3 })
    // expect(s.next().value).toEqual({ exercise: "foo", secondsRemaining: 2 })
    // expect(s.next().value).toEqual({ exercise: "foo", secondsRemaining: 1 })
    // expect(s.next().value).toEqual({ exercise: "foo", secondsRemaining: 0 })
  })
})
