const sequenceGenerator = require(".")

describe("sequence", () => {
  it("works", () => {
    const s = sequenceGenerator({
      exerciseSeconds: 10,
      exerciseRestSeconds: 3,
      rounds: 2,
      roundRestSeconds: 5,
      exercises: "foo\n   bar\n baz   ",
    })

    expect(s.next().value).toEqual({ exercise: "foo", secondsRemaining: 10 })
    expect(s.next().value).toEqual({ exercise: "foo", secondsRemaining: 9 })
    expect(s.next().value).toEqual({ exercise: "foo", secondsRemaining: 8 })
    expect(s.next().value).toEqual({ exercise: "foo", secondsRemaining: 7 })
    expect(s.next().value).toEqual({ exercise: "foo", secondsRemaining: 6 })
    expect(s.next().value).toEqual({ exercise: "foo", secondsRemaining: 5 })
    expect(s.next().value).toEqual({ exercise: "foo", secondsRemaining: 4 })
    expect(s.next().value).toEqual({ exercise: "foo", secondsRemaining: 3 })
    expect(s.next().value).toEqual({ exercise: "foo", secondsRemaining: 2 })
    expect(s.next().value).toEqual({ exercise: "foo", secondsRemaining: 1 })

    expect(s.next().value).toEqual({ exercise: "rest", secondsRemaining: 3 })
    expect(s.next().value).toEqual({ exercise: "rest", secondsRemaining: 2 })
    expect(s.next().value).toEqual({ exercise: "rest", secondsRemaining: 1 })

    expect(s.next().value).toEqual({ exercise: "bar", secondsRemaining: 10 })
    expect(s.next().value).toEqual({ exercise: "bar", secondsRemaining: 9 })
    expect(s.next().value).toEqual({ exercise: "bar", secondsRemaining: 8 })
    expect(s.next().value).toEqual({ exercise: "bar", secondsRemaining: 7 })
    expect(s.next().value).toEqual({ exercise: "bar", secondsRemaining: 6 })
    expect(s.next().value).toEqual({ exercise: "bar", secondsRemaining: 5 })
    expect(s.next().value).toEqual({ exercise: "bar", secondsRemaining: 4 })
    expect(s.next().value).toEqual({ exercise: "bar", secondsRemaining: 3 })
    expect(s.next().value).toEqual({ exercise: "bar", secondsRemaining: 2 })
    expect(s.next().value).toEqual({ exercise: "bar", secondsRemaining: 1 })

    expect(s.next().value).toEqual({ exercise: "rest", secondsRemaining: 3 })
    expect(s.next().value).toEqual({ exercise: "rest", secondsRemaining: 2 })
    expect(s.next().value).toEqual({ exercise: "rest", secondsRemaining: 1 })

    expect(s.next().value).toEqual({ exercise: "baz", secondsRemaining: 10 })
    expect(s.next().value).toEqual({ exercise: "baz", secondsRemaining: 9 })
    expect(s.next().value).toEqual({ exercise: "baz", secondsRemaining: 8 })
    expect(s.next().value).toEqual({ exercise: "baz", secondsRemaining: 7 })
    expect(s.next().value).toEqual({ exercise: "baz", secondsRemaining: 6 })
    expect(s.next().value).toEqual({ exercise: "baz", secondsRemaining: 5 })
    expect(s.next().value).toEqual({ exercise: "baz", secondsRemaining: 4 })
    expect(s.next().value).toEqual({ exercise: "baz", secondsRemaining: 3 })
    expect(s.next().value).toEqual({ exercise: "baz", secondsRemaining: 2 })
    expect(s.next().value).toEqual({ exercise: "baz", secondsRemaining: 1 })

    expect(s.next().value).toEqual({ exercise: "rest", secondsRemaining: 5 })
    expect(s.next().value).toEqual({ exercise: "rest", secondsRemaining: 4 })
    expect(s.next().value).toEqual({ exercise: "rest", secondsRemaining: 3 })
    expect(s.next().value).toEqual({ exercise: "rest", secondsRemaining: 2 })
    expect(s.next().value).toEqual({ exercise: "rest", secondsRemaining: 1 })

    expect(s.next().value).toEqual({ exercise: "foo", secondsRemaining: 10 })
    expect(s.next().value).toEqual({ exercise: "foo", secondsRemaining: 9 })
    expect(s.next().value).toEqual({ exercise: "foo", secondsRemaining: 8 })
    expect(s.next().value).toEqual({ exercise: "foo", secondsRemaining: 7 })
    expect(s.next().value).toEqual({ exercise: "foo", secondsRemaining: 6 })
    expect(s.next().value).toEqual({ exercise: "foo", secondsRemaining: 5 })
    expect(s.next().value).toEqual({ exercise: "foo", secondsRemaining: 4 })
    expect(s.next().value).toEqual({ exercise: "foo", secondsRemaining: 3 })
    expect(s.next().value).toEqual({ exercise: "foo", secondsRemaining: 2 })
    expect(s.next().value).toEqual({ exercise: "foo", secondsRemaining: 1 })

    expect(s.next().value).toEqual({ exercise: "rest", secondsRemaining: 3 })
    expect(s.next().value).toEqual({ exercise: "rest", secondsRemaining: 2 })
    expect(s.next().value).toEqual({ exercise: "rest", secondsRemaining: 1 })

    expect(s.next().value).toEqual({ exercise: "bar", secondsRemaining: 10 })
    expect(s.next().value).toEqual({ exercise: "bar", secondsRemaining: 9 })
    expect(s.next().value).toEqual({ exercise: "bar", secondsRemaining: 8 })
    expect(s.next().value).toEqual({ exercise: "bar", secondsRemaining: 7 })
    expect(s.next().value).toEqual({ exercise: "bar", secondsRemaining: 6 })
    expect(s.next().value).toEqual({ exercise: "bar", secondsRemaining: 5 })
    expect(s.next().value).toEqual({ exercise: "bar", secondsRemaining: 4 })
    expect(s.next().value).toEqual({ exercise: "bar", secondsRemaining: 3 })
    expect(s.next().value).toEqual({ exercise: "bar", secondsRemaining: 2 })
    expect(s.next().value).toEqual({ exercise: "bar", secondsRemaining: 1 })

    expect(s.next().value).toEqual({ exercise: "rest", secondsRemaining: 3 })
    expect(s.next().value).toEqual({ exercise: "rest", secondsRemaining: 2 })
    expect(s.next().value).toEqual({ exercise: "rest", secondsRemaining: 1 })

    expect(s.next().value).toEqual({ exercise: "baz", secondsRemaining: 10 })
    expect(s.next().value).toEqual({ exercise: "baz", secondsRemaining: 9 })
    expect(s.next().value).toEqual({ exercise: "baz", secondsRemaining: 8 })
    expect(s.next().value).toEqual({ exercise: "baz", secondsRemaining: 7 })
    expect(s.next().value).toEqual({ exercise: "baz", secondsRemaining: 6 })
    expect(s.next().value).toEqual({ exercise: "baz", secondsRemaining: 5 })
    expect(s.next().value).toEqual({ exercise: "baz", secondsRemaining: 4 })
    expect(s.next().value).toEqual({ exercise: "baz", secondsRemaining: 3 })
    expect(s.next().value).toEqual({ exercise: "baz", secondsRemaining: 2 })
    expect(s.next().value).toEqual({ exercise: "baz", secondsRemaining: 1 })

    expect(s.next().done).toEqual(true)
  })
})
