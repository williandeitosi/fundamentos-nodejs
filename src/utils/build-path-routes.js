export function buildRoutePath(path) {
  const routeParametersRegex = /:([a-zA-z]+)/g;
  return console.log(Array.from(path.matchAll(routeParametersRegex)));
}
