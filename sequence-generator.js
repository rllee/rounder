/**
 * A function intended to be called every second in a setInterval
 */
function* sequenceGenerator({
  exerciseSeconds,
  exerciseRestSeconds,
  rounds,
  roundRestSeconds,
  exercises: exercisesRaw,
}) {
  let secondsElapsed = 0;
  let round = 0;

  const exercises = exercisesRaw
    .split("\n")
    .map((s) => s.trim())
    .filter(Boolean);

  while (round < rounds) {
    for (exercise of exercises) {
      // exercise
      while (secondsElapsed < exerciseSeconds) {
        yield {
          exercise,
          totalSeconds: exerciseSeconds,
          secondsRemaining: exerciseSeconds - secondsElapsed,
        };
        secondsElapsed++;
      }
      secondsElapsed = 0;

      // exercise rest
      if (exercise !== exercises[exercise.length - 1]) {
        while (secondsElapsed < exerciseRestSeconds) {
          yield {
            exercise: "rest",
            totalSeconds: exerciseRestSeconds,
            secondsRemaining: exerciseRestSeconds - secondsElapsed,
          };
          secondsElapsed++;
        }
        secondsElapsed = 0;
      }
    }

    round++;

    // round rest
    if (round < rounds) {
      while (secondsElapsed < roundRestSeconds) {
        yield {
          exercise: "rest",
          totalSeconds: roundRestSeconds,
          secondsRemaining: roundRestSeconds - secondsElapsed,
        };
        secondsElapsed++;
      }
      secondsElapsed = 0;
    }
  }
}

window.sequenceGenerator = sequenceGenerator;
