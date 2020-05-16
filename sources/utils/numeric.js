const checkNumber = (v) => v && !isNaN(Number(v))

const toNaturalNumber = (v) =>
  isNaN(Number(v)) || Number(v) < 0 ? 0 : Math.floor(Number(v))

const fibonacci = (n) => (n < 2 ? 1 : fibonacci(n - 1) + fibonacci(n - 2))

const fibonacciAsync = (n, done) =>
  n === 0 || n === 1
    ? done(1)
    : process.nextTick(() =>
        fibonacciAsync(n - 1, (v1) =>
          process.nextTick(() => fibonacciAsync(n - 2, (v2) => done(v1 + v2))),
        ),
      )

const factorial = (n) => (n <= 2 ? 1 : n * factorial(n - 1))

module.exports = {
  checkNumber,
  toNaturalNumber,
  fibonacci,
  fibonacciAsync,
  factorial,
}
