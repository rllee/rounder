function* gen({
  exerciseSeconds,
  exerciseRestSeconds,
  rounds,
  roundRestSeconds,
  exercises: exercisesRaw,
}) {
  const exercises = exercisesRaw
    .split("\n")
    .map((s) => s.trim())
    .filter(Boolean)

  for (exercise of exercises) {
    yield { exercise }
  }
}

module.exports = gen
