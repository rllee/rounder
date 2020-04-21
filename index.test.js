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

    expect(s.next().value).toEqual({ exercise: "foo", totalSeconds: 10, secondsRemaining: 10 })
    expect(s.next().value).toEqual({ exercise: "foo", totalSeconds: 10, secondsRemaining: 9 })
    expect(s.next().value).toEqual({ exercise: "foo", totalSeconds: 10, secondsRemaining: 8 })
    expect(s.next().value).toEqual({ exercise: "foo", totalSeconds: 10, secondsRemaining: 7 })
    expect(s.next().value).toEqual({ exercise: "foo", totalSeconds: 10, secondsRemaining: 6 })
    expect(s.next().value).toEqual({ exercise: "foo", totalSeconds: 10, secondsRemaining: 5 })
    expect(s.next().value).toEqual({ exercise: "foo", totalSeconds: 10, secondsRemaining: 4 })
    expect(s.next().value).toEqual({ exercise: "foo", totalSeconds: 10, secondsRemaining: 3 })
    expect(s.next().value).toEqual({ exercise: "foo", totalSeconds: 10, secondsRemaining: 2 })
    expect(s.next().value).toEqual({ exercise: "foo", totalSeconds: 10, secondsRemaining: 1 })

    expect(s.next().value).toEqual({ exercise: "rest", totalSeconds: 3, secondsRemaining: 3 })
    expect(s.next().value).toEqual({ exercise: "rest", totalSeconds: 3, secondsRemaining: 2 })
    expect(s.next().value).toEqual({ exercise: "rest", totalSeconds: 3, secondsRemaining: 1 })

    expect(s.next().value).toEqual({ exercise: "bar", totalSeconds: 10, secondsRemaining: 10 })
    expect(s.next().value).toEqual({ exercise: "bar", totalSeconds: 10, secondsRemaining: 9 })
    expect(s.next().value).toEqual({ exercise: "bar", totalSeconds: 10, secondsRemaining: 8 })
    expect(s.next().value).toEqual({ exercise: "bar", totalSeconds: 10, secondsRemaining: 7 })
    expect(s.next().value).toEqual({ exercise: "bar", totalSeconds: 10, secondsRemaining: 6 })
    expect(s.next().value).toEqual({ exercise: "bar", totalSeconds: 10, secondsRemaining: 5 })
    expect(s.next().value).toEqual({ exercise: "bar", totalSeconds: 10, secondsRemaining: 4 })
    expect(s.next().value).toEqual({ exercise: "bar", totalSeconds: 10, secondsRemaining: 3 })
    expect(s.next().value).toEqual({ exercise: "bar", totalSeconds: 10, secondsRemaining: 2 })
    expect(s.next().value).toEqual({ exercise: "bar", totalSeconds: 10, secondsRemaining: 1 })

    expect(s.next().value).toEqual({ exercise: "rest", totalSeconds: 3, secondsRemaining: 3 })
    expect(s.next().value).toEqual({ exercise: "rest", totalSeconds: 3, secondsRemaining: 2 })
    expect(s.next().value).toEqual({ exercise: "rest", totalSeconds: 3, secondsRemaining: 1 })

    expect(s.next().value).toEqual({ exercise: "baz", totalSeconds: 10, secondsRemaining: 10 })
    expect(s.next().value).toEqual({ exercise: "baz", totalSeconds: 10, secondsRemaining: 9 })
    expect(s.next().value).toEqual({ exercise: "baz", totalSeconds: 10, secondsRemaining: 8 })
    expect(s.next().value).toEqual({ exercise: "baz", totalSeconds: 10, secondsRemaining: 7 })
    expect(s.next().value).toEqual({ exercise: "baz", totalSeconds: 10, secondsRemaining: 6 })
    expect(s.next().value).toEqual({ exercise: "baz", totalSeconds: 10, secondsRemaining: 5 })
    expect(s.next().value).toEqual({ exercise: "baz", totalSeconds: 10, secondsRemaining: 4 })
    expect(s.next().value).toEqual({ exercise: "baz", totalSeconds: 10, secondsRemaining: 3 })
    expect(s.next().value).toEqual({ exercise: "baz", totalSeconds: 10, secondsRemaining: 2 })
    expect(s.next().value).toEqual({ exercise: "baz", totalSeconds: 10, secondsRemaining: 1 })

    expect(s.next().value).toEqual({ exercise: "rest", totalSeconds: 5, secondsRemaining: 5 })
    expect(s.next().value).toEqual({ exercise: "rest", totalSeconds: 5, secondsRemaining: 4 })
    expect(s.next().value).toEqual({ exercise: "rest", totalSeconds: 5, secondsRemaining: 3 })
    expect(s.next().value).toEqual({ exercise: "rest", totalSeconds: 5, secondsRemaining: 2 })
    expect(s.next().value).toEqual({ exercise: "rest", totalSeconds: 5, secondsRemaining: 1 })

    expect(s.next().value).toEqual({ exercise: "foo", totalSeconds: 10, secondsRemaining: 10 })
    expect(s.next().value).toEqual({ exercise: "foo", totalSeconds: 10, secondsRemaining: 9 })
    expect(s.next().value).toEqual({ exercise: "foo", totalSeconds: 10, secondsRemaining: 8 })
    expect(s.next().value).toEqual({ exercise: "foo", totalSeconds: 10, secondsRemaining: 7 })
    expect(s.next().value).toEqual({ exercise: "foo", totalSeconds: 10, secondsRemaining: 6 })
    expect(s.next().value).toEqual({ exercise: "foo", totalSeconds: 10, secondsRemaining: 5 })
    expect(s.next().value).toEqual({ exercise: "foo", totalSeconds: 10, secondsRemaining: 4 })
    expect(s.next().value).toEqual({ exercise: "foo", totalSeconds: 10, secondsRemaining: 3 })
    expect(s.next().value).toEqual({ exercise: "foo", totalSeconds: 10, secondsRemaining: 2 })
    expect(s.next().value).toEqual({ exercise: "foo", totalSeconds: 10, secondsRemaining: 1 })

    expect(s.next().value).toEqual({ exercise: "rest", totalSeconds: 3, secondsRemaining: 3 })
    expect(s.next().value).toEqual({ exercise: "rest", totalSeconds: 3, secondsRemaining: 2 })
    expect(s.next().value).toEqual({ exercise: "rest", totalSeconds: 3, secondsRemaining: 1 })

    expect(s.next().value).toEqual({ exercise: "bar", totalSeconds: 10, secondsRemaining: 10 })
    expect(s.next().value).toEqual({ exercise: "bar", totalSeconds: 10, secondsRemaining: 9 })
    expect(s.next().value).toEqual({ exercise: "bar", totalSeconds: 10, secondsRemaining: 8 })
    expect(s.next().value).toEqual({ exercise: "bar", totalSeconds: 10, secondsRemaining: 7 })
    expect(s.next().value).toEqual({ exercise: "bar", totalSeconds: 10, secondsRemaining: 6 })
    expect(s.next().value).toEqual({ exercise: "bar", totalSeconds: 10, secondsRemaining: 5 })
    expect(s.next().value).toEqual({ exercise: "bar", totalSeconds: 10, secondsRemaining: 4 })
    expect(s.next().value).toEqual({ exercise: "bar", totalSeconds: 10, secondsRemaining: 3 })
    expect(s.next().value).toEqual({ exercise: "bar", totalSeconds: 10, secondsRemaining: 2 })
    expect(s.next().value).toEqual({ exercise: "bar", totalSeconds: 10, secondsRemaining: 1 })

    expect(s.next().value).toEqual({ exercise: "rest", totalSeconds: 3, secondsRemaining: 3 })
    expect(s.next().value).toEqual({ exercise: "rest", totalSeconds: 3, secondsRemaining: 2 })
    expect(s.next().value).toEqual({ exercise: "rest", totalSeconds: 3, secondsRemaining: 1 })

    expect(s.next().value).toEqual({ exercise: "baz", totalSeconds: 10, secondsRemaining: 10 })
    expect(s.next().value).toEqual({ exercise: "baz", totalSeconds: 10, secondsRemaining: 9 })
    expect(s.next().value).toEqual({ exercise: "baz", totalSeconds: 10, secondsRemaining: 8 })
    expect(s.next().value).toEqual({ exercise: "baz", totalSeconds: 10, secondsRemaining: 7 })
    expect(s.next().value).toEqual({ exercise: "baz", totalSeconds: 10, secondsRemaining: 6 })
    expect(s.next().value).toEqual({ exercise: "baz", totalSeconds: 10, secondsRemaining: 5 })
    expect(s.next().value).toEqual({ exercise: "baz", totalSeconds: 10, secondsRemaining: 4 })
    expect(s.next().value).toEqual({ exercise: "baz", totalSeconds: 10, secondsRemaining: 3 })
    expect(s.next().value).toEqual({ exercise: "baz", totalSeconds: 10, secondsRemaining: 2 })
    expect(s.next().value).toEqual({ exercise: "baz", totalSeconds: 10, secondsRemaining: 1 })

    expect(s.next().done).toEqual(true)
  })
})
