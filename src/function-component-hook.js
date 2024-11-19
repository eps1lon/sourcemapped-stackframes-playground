function useState() {
  throw new Error("Boom");
}

function Component() {
  return useState()[0];
}

Component();
