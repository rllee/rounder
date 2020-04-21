function* gen(rounds) {
  let i = 0;

  while (i++ < rounds) {
    yield i;
  }
}

const engine = gen(5);
let current = engine.next();

const interval = setInterval(() => {
  if (!current.done) {
    console.log(current.value);
    current = engine.next();
  } else {
    clearInterval(interval);
  }
}, 1000);
